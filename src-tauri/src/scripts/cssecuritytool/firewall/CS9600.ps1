New-NetFirewallRule -DisplayName "CS9600 80 In" -Direction Inbound -LocalPort 80 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 80 Out" -Direction Outbound -LocalPort 80 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 443 In" -Direction Inbound -LocalPort 443 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 443 Out" -Direction Outbound -LocalPort 443 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 3389 In" -Direction Inbound -LocalPort 3389 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 3389 Out" -Direction Outbound -LocalPort 3389 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 Bonjour 5354" -Direction Inbound -LocalPort 5354 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS9600 Bonjour 5354" -Direction Outbound -LocalPort 5354 -Protocol TCP -Action Allow



