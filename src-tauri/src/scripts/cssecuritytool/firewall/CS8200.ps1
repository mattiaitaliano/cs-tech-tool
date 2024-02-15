New-NetFirewallRule -DisplayName "CS8200 21 TCP In" -Direction Inbound -LocalPort 21 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 21 TCP Out" -Direction Outbound -LocalPort 21 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 1001 UDP In" -Direction Inbound -LocalPort 1001 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 1001 UDP Out" -Direction Outbound -LocalPort 1001 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 10000 TCP In" -Direction Inbound -LocalPort 10000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 10000 TCP Out" -Direction Outbound -LocalPort 10000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 10001 TCP In" -Direction Inbound -LocalPort 10001 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 10001 TCP Out" -Direction Outbound -LocalPort 10001 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 20000 TCP In" -Direction Inbound -LocalPort 20000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 20000 TCP Out" -Direction Outbound -LocalPort 20000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 20001 TCP In" -Direction Inbound -LocalPort 20001 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 20001 TCP Out" -Direction Outbound -LocalPort 20001 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 33001 TCP In" -Direction Inbound -LocalPort 33001 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 33001 TCP Out" -Direction Outbound -LocalPort 33001 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 33002 TCP In" -Direction Inbound -LocalPort 33002 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 33002 TCP Out" -Direction Outbound -LocalPort 33002 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 Bonjour 5354" -Direction Inbound -LocalPort 5354 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "CS8200 Bonjour 5354" -Direction Outbound -LocalPort 5354 -Protocol TCP -Action Allow