var config = {

modes: {
  "factory": "Neuinstallation der Freifunk Firmware",
  "sysupgrade": "Update der Freifunk Firmware"
},

sites: {
  "abg": {id: "abg", version: "0.7.5-abg-stable20150913000000000", name: "Arnsberg"},
  "bal": {id: "bal", version: "0.7.5-balvekierspe-stable20151011", name: "Balve Kierspe"},
  "big": {id: "big", version: "0.7.5-bsee-stable2015091300000000", name: "Biggesee"},
  "mes": {id: "mes", version: "0.7.5-mesbes-stable20150914000000", name: "Meschede Bestwig"},
  "moq": {id: "moq", version: "0.7.5-mq-stable201509140000000000", name: "Moehnequelle"},
  "mos": {id: "mos", version: "0.7.5-msee-stable2015091400000000", name: "Moehnesee"},
  "sso": {id: "sso", version: "0.7.5-soest-stable201510110000000", name: "Stadt Soest"}
  "sou": {id: "ssu", version: "0.7.5-sundern-stable2015101100000", name: "Soester Umland"}
},

//router list for gluon v2015.1
manufacturers: {
  "buffalo": {id: "buffalo", name: "Buffalo"},
  "d-link": {id: "d-link", name: "D-Link"},
  "gl-inet": {id: "gl-inet", name: "GL-Inet"},
  "linksys": {id: "linksys", name: "Linksys"},
  "tp-link": {id: "tp-link", name: "TP-Link"},
  "ubiquiti": {id: "ubiquiti", name: "Ubiquiti"},
  "netgear": {id: "netgear", name: "Netgear"}
},

routers: {
  "buffalo-wzr-hp-ag300h-wzr-600dhp": {id: "buffalo-wzr-hp-ag300h-wzr-600dhp", name: "WZR-600DHP", manufacturer: "Buffalo"},
  "buffalo-wzr-hp-g450h": {id: "buffalo-wzr-hp-g450h", name: "WZR-HP-G450H", manufacturer: "Buffalo"},
  "d-link-dir-615-rev-c1": {id: "d-link-dir-615-rev-c1", name: "615", manufacturer: "D-Link"},
  "d-link-dir-825-rev-b1": {id: "d-link-dir-825-rev-b1", name: "825", manufacturer: "D-Link"},
  "gl-inet-6408a-v1": {id: "gl-inet-6408a-v1", name: "6408A", manufacturer: "GL-Inet"},
  "gl-inet-6416a-v1": {id: "gl-inet-6416a-v1", name: "6416A", manufacturer: "GL-Inet"},
  "linksys-wrt160nl": {id: "linksys-wrt160nl", name: "WRT160NL", manufacturer: "Linksys"},
  "netgear-wndr3700": {id: "netgear-wndr3700", name: "WNDR3700 Ver:1", manufacturer: "Netgear"},
  "netgear-wndr3700v2": {id: "netgear-wndr3700v2", name: "WNDR3700 Ver:2", manufacturer: "Netgear"},
  "netgear-wndr3800": {id: "netgear-wndr3800", name: "WNDR3800 Ver:1", manufacturer: "Netgear"},
  "netgear-wndrmacv2": {id: "netgear-wndrmacv2", name: "WNDRMAC Ver:2", manufacturer: "Netgear"},
  "tp-link-cpe210-v1.0": {id: "tp-link-cpe210-v1.0", name: "CPE210 Ver:1", manufacturer: "TP-Link"},
  "tp-link-cpe220-v1.0": {id: "tp-link-cpe220-v1.0", name: "CPE220 Ver:1", manufacturer: "TP-Link"},
  "tp-link-cpe510-v1.0": {id: "tp-link-cpe510-v1.0", name: "CPE510 Ver:1", manufacturer: "TP-Link"},
  "tp-link-cpe520-v1.0": {id: "tp-link-cpe520-v1.0", name: "CPE520 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-mr3020-v1": {id: "tp-link-tl-mr3020-v1", name: "TL-MR3020 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-mr3040-v1": {id: "tp-link-tl-mr3040-v1", name: "TL-MR3040 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-mr3040-v2": {id: "tp-link-tl-mr3040-v2", name: "TL-MR3040 Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-mr3220-v1": {id: "tp-link-tl-mr3220-v1", name: "TL-MR3220 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-mr3220-v2": {id: "tp-link-tl-mr3220-v2", name: "TL-MR3220 Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-mr3420-v1": {id: "tp-link-tl-mr3420-v1", name: "TL-MR3420 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-mr3420-v2": {id: "tp-link-tl-mr3420-v2", name: "TL-MR3420 Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wa701n-nd": {id: "tp-link-tl-wa701n-nd", name: "TL-WA701N/ND", manufacturer: "TP-Link"},
  "tp-link-tl-wa750re-v1": {id: "tp-link-tl-wa750re-v1", name: "TL-WA750RE Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wa801n-nd-v2": {id: "tp-link-tl-wa801n-nd-v2", name: "TL-WA801N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wa850re-v1": {id: "tp-link-tl-wa850re-v1", name: "TL-WA850RE Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wa860re-v1": {id: "tp-link-tl-wa860re-v1", name: "TL-WA860RE Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wa901n-nd-v2": {id: "tp-link-tl-wa901n-nd-v2", name: "TL-WA901N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wa901n-nd-v3": {id: "tp-link-tl-wa901n-nd-v3", name: "TL-WA901N/ND Ver:3", manufacturer: "TP-Link"},
  "tp-link-tl-wdr3500-v1": {id: "tp-link-tl-wdr3500-v1", name: "TL-WDR3500 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wdr3600-v1": {id: "tp-link-tl-wdr3600-v1", name: "TL-WDR3600 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wdr4300-v1": {id: "tp-link-tl-wdr4300-v1", name: "TL-WDR4300 Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr703n-v1": {id: "tp-link-tl-wr703n-v1", name: "TL-WR703N Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr710n-v1:": {id: "tp-link-tl-wr710n-v1", name: "TL-WR710N Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr740n-nd-v1": {id: "tp-link-tl-wr740n-nd-v1", name: "TL-WR740N/ND Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr740n-nd-v3": {id: "tp-link-tl-wr740n-nd-v3", name: "TL-WR740N/ND Ver:3", manufacturer: "TP-Link"},
  "tp-link-tl-wr740n-nd-v4": {id: "tp-link-tl-wr740n-nd-v4", name: "TL-WR740N/ND Ver:4", manufacturer: "TP-Link"},
  "tp-link-tl-wr741n-nd-v1": {id: "tp-link-tl-wr741n-nd-v1", name: "TL-WR741N/ND Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr741n-nd-v2": {id: "tp-link-tl-wr741n-nd-v2", name: "TL-WR741N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wr741n-nd-v4": {id: "tp-link-tl-wr741n-nd-v4", name: "TL-WR741N/ND Ver:4", manufacturer: "TP-Link"},
  "tp-link-tl-wr743n-nd-v1": {id: "tp-link-tl-wr743n-nd-v1", name: "TL-WR743N/ND Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr743n-nd-v2": {id: "tp-link-tl-wr743n-nd-v2", name: "TL-WR743N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wr841n-nd-v3": {id: "tp-link-tl-wr841n-nd-v3", name: "TL-WR841N/ND Ver:3", manufacturer: "TP-Link"},
  "tp-link-tl-wr841n-nd-v5": {id: "tp-link-tl-wr841n-nd-v5", name: "TL-WR841N/ND Ver:5", manufacturer: "TP-Link"},
  "tp-link-tl-wr841n-nd-v7": {id: "tp-link-tl-wr841n-nd-v7", name: "TL-WR841N/ND Ver:7", manufacturer: "TP-Link"},
  "tp-link-tl-wr841n-nd-v8": {id: "tp-link-tl-wr841n-nd-v8", name: "TL-WR841N/ND Ver:8", manufacturer: "TP-Link"},
  "tp-link-tl-wr841n-nd-v9": {id: "tp-link-tl-wr841n-nd-v9", name: "TL-WR841N/ND Ver:9", manufacturer: "TP-Link"},
  "tp-link-tl-wr842n-nd-v1": {id: "tp-link-tl-wr842n-nd-v1", name: "TL-WR842N/ND Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr842n-nd-v2": {id: "tp-link-tl-wr842n-nd-v2", name: "TL-WR842N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wr941n-nd-v2": {id: "tp-link-tl-wr941n-nd-v2", name: "TL-WR941N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wr941n-nd-v3": {id: "tp-link-tl-wr941n-nd-v3", name: "TL-WR941N/ND Ver:3", manufacturer: "TP-Link"},
  "tp-link-tl-wr941n-nd-v4": {id: "tp-link-tl-wr941n-nd-v4", name: "TL-WR941N/ND Ver:4", manufacturer: "TP-Link"},
  "tp-link-tl-wr941n-nd-v5": {id: "tp-link-tl-wr941n-nd-v5", name: "TL-WR941N/ND Ver:5", manufacturer: "TP-Link"},
  "tp-link-tl-wr1043n-nd-v1": {id: "tp-link-tl-wr1043n-nd-v1", name: "TL-WR1043N/ND Ver:1", manufacturer: "TP-Link"},
  "tp-link-tl-wr1043n-nd-v2": {id: "tp-link-tl-wr1043n-nd-v2", name: "TL-WR1043N/ND Ver:2", manufacturer: "TP-Link"},
  "tp-link-tl-wr2543n-nd-v1": {id: "tp-link-tl-wr2543n-nd-v1", name: "TL-WR2543N/ND Ver:1", manufacturer: "TP-Link"},
  "ubiquiti-bullet-m": {id: "ubiquiti-bullet-m", name: "Bullet M", manufacturer: "Ubiquiti"},
  "ubiquiti-loco-m-xw": {id: "ubiquiti-loco-m-xw", name: "Loco M XW", manufacturer: "Ubiquiti"},
  "ubiquiti-nanostation-m-xw": {id: "ubiquiti-nanostation-m-xw", name: "Nanostation M XW", manufacturer: "Ubiquiti"},
  "ubiquiti-nanostation-m": {id: "ubiquiti-nanostation-m", name: "Nanostation M", manufacturer: "Ubiquiti"},	 
  "ubiquiti-unifi-ap-pro": {id: "ubiquiti-unifi-ap-pro", name: "UniFi AP Pro", manufacturer: "Ubiquiti"},
  "ubiquiti-unifi": {id: "ubiquiti-unifi", name: "UniFi", manufacturer: "Ubiquiti"},
  "ubiquiti-unifiap-outdoor": {id: "ubiquiti-unifiap-outdoor", name: "UniFi AP Outdoor", manufacturer: "Ubiquiti"}
},

version: "0.7.2",

name: "gl.wupper",

url: "http://images.ff.petabyteboy.de/ar71xx-generic/{{parse(selectedSite).id}}/stable/{{selectedMode}}/gluon-ffgl-{{parse(selectedSite).id}}-{{parse(selectedSite).version}}-{{parse(selectedRouter).id}}{{selectedMode=='sysupgrade'?'-sysupgrade.':'.'}}{{parse(selectedRouter).manufacturer=='Netgear' && selectedMode=='factory' ? 'img': 'bin'}}"

}
