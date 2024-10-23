import subprocess
from django.shortcuts import render

# Create your views here.
def change_hostname(new_hostname):
    # Update /etc/hostname
    with open('/etc/hostname', 'w') as f:
        f.write(new_hostname + '\n')

    # Update /etc/hosts
    with open('/etc/hosts', 'r') as f:
        hosts_content = f.readlines()

    with open('/etc/hosts', 'w') as f:
        for line in hosts_content:
            if '127.0.1.1' in line:
                line = f'127.0.1.1\t{new_hostname}\n'
            f.write(line)

    # Change the hostname immediately
    subprocess.run(['hostnamectl', 'set-hostname', new_hostname])

def set_static_ip(connection_name, static_ip, gateway_ip, dns_ip):
    # Set static IP
    subprocess.run(['nmcli', 'con', 'modify', connection_name, 'ipv4.addresses', static_ip])
    subprocess.run(['nmcli', 'con', 'modify', connection_name, 'ipv4.gateway', gateway_ip])
    subprocess.run(['nmcli', 'con', 'modify', connection_name, 'ipv4.dns', dns_ip])
    subprocess.run(['nmcli', 'con', 'modify', connection_name, 'ipv4.method', 'manual'])

    # Restart the connection
    subprocess.run(['nmcli', 'con', 'down', connection_name])
    subprocess.run(['nmcli', 'con', 'up', connection_name])

    print(f'Static IP set to {static_ip} for {connection_name}.')




def set_dynamic_ip(connection_name):
    # Set to DHCP
    subprocess.run(['nmcli', 'con', 'modify', connection_name, 'ipv4.method', 'auto'])

    # Restart the connection
    subprocess.run(['nmcli', 'con', 'down', connection_name])
    subprocess.run(['nmcli', 'con', 'up', connection_name])

    print(f'Dynamic IP set for {connection_name}.')