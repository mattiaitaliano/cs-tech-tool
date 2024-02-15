export type CSDProduct = {
    [key: string]: string;
  }

type DriverInfo = {
    cpu: string;
    ram: string;
    hard_disk: string;
    gpu: string;
    cuda: string;
    os: string;
};

interface DriversType {
    [key: string]: { [key: string]: DriverInfo };
}

export const CSDProducts = {
    cs8x00 : {
        "no_selection": "---",
        "cs8100": "CS 8100",
        "cs8100sc": "CS 8100 SC",
        "cs81003d": "CS 8100 3D",
        "cs8100sc3d": "CS 8100 SC 3D",
        "cs8200access": "CS 8200 ACCESS",
        "cs8200neo": "CS 8100 NEO"
    },

    cs1x00 : {
        "no_selection": "---",
        "cs1200": "CS 1200",
        "cs1500": "CS 1500"
    },

    cs7x00 : {
        "no_selection": "---",
        "cs7200": "CS 7200",
        "cs7200neo": "CS 7200 NEO",
        "cs7600": "CS 7600"
    },


    cs2x00 : {
        "no_selection": "---",
        "cs2100": "CS 2100",
        "cs2200": "CS 2200"
    },


    RVG : {
        "no_selection": "---",
        "cs5200": "CS 5200",
        "cs6200": "CS 6200"
    },


    cs9x00 : {
        "no_selection": "---",
        "cs9000": "CS 9000",
        "cs9300": "CS 9300"
    },


    cs9600 : {
        "no_selection": "---",
        "cs9600": "CS 9600(Proxy)"
    },
}

export const Drivers: DriversType = {
    "no_selection": {
        "base": {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        }
    },
    "cs8100" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "0.2.34.0" : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Graphic-based board on PCI Express video bus with minimum 512MB",
            cuda: "N/A",
            os: "Windows 10 or higher",
        },
    },
    "cs8100sc" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "0.2.303.0" : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Graphic-based board on PCI Express video bus with minimum 512MB",
            cuda: "N/A",
            os: "Windows 10 or higher",
        },
    },
    "cs81003d" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.1.36.0 " : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "500 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Windows 10 or higher",
        },
    },
    "cs8100sc3d" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.0.36.0" : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "500 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Windows 10 or higher",
        },
    },
    "cs8200access" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.0.12.0" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Windows 10 or higher",
        },
    },
    "cs8200neo" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.0.375.0" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Windows 10 or higher",
        },
    },
    "cs1200" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "0.5.0.47 " : {
            cpu: "1.8 GHz Intel Pentium IV",
            ram: "2 GB",
            hard_disk: "N/A",
            gpu: "128 Mb (integrated or dedicated) OpenGL version 1.4 or higher",
            cuda: "N/A",
            os: "Windows 8 or above",
        },
    },
    "cs1500" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "0.5.0.47" : {
            cpu: "1.8 GHz Intel Pentium IV",
            ram: "2 GB",
            hard_disk: "N/A",
            gpu: "128 Mb (integrated or dedicated) OpenGL version 1.4 or higher",
            cuda: "N/A",
            os: "Windows 8 or above",
        },
    },
    "cs7200" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.0.0.7 " : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI based board supporting Open Glide 1.2 with 256 MB of video RAM",
            cuda: "",
            os: "Windows 10 Professional or higher",
        },
    },
    "cs7200neo" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.0.0.7" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI based board supporting Open Glide 1.2 with 256 MB of video RAM",
            cuda: "",
            os: "Windows 10 Professional or higher",
        },
    },
    "cs7600" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.0.10.11" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI based board supporting Open Glide 1.2 with 256 MB of video RAM",
            cuda: "",
            os: "Windows 10 Professional or higher",
        },
    },
    "cs2100" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "3.12.0.14 " : {
            cpu: "N/A",
            ram: "N/A",
            hard_disk: "N/A",
            gpu: "N/A",
            cuda: "N/A",
            os: "N/A",
        },
    },
    "cs2200" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "3.12.0.14" : {
            cpu: "N/A",
            ram: "N/A",
            hard_disk: "N/A",
            gpu: "N/A",
            cuda: "N/A",
            os: "N/A",
        },
    },
    "cs5200" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "4.6.19.0-A " : {
            cpu: "2 GHz Intel Duo Core",
            ram: "2 GB",
            hard_disk: "80 GB",
            gpu: "Nvidia/ATI based board with 256 MB of RAM",
            cuda: "N/A",
            os: "Windows 10 or higher",
        },
    },
    "cs6200" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "4.6.19.0-A" : {
            cpu: "2 GHz Intel Duo Core",
            ram: "2 GB",
            hard_disk: "80 GB",
            gpu: "Nvidia/ATI based board with 256 MB of RAM",
            cuda: "N/A",
            os: "Windows 10 or higher",
        },
    },
    "cs9000" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "5.4.5.7" : {
            cpu: "2 GHz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI-based board supporting Open GL 1.2 with 512 MB of video RAM",
            cuda: "N/A",
            os: "Windows 7 or higher",
        },
    },
    "cs9300" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "2.4.4.2-C": {
            cpu: "2.4 GHz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI-based board supporting Open GL 1.2 with 512 MB of video RAM",
            cuda: "N/A",
            os: "Windows 7 or higher",
        },
    },
    "cs9600" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
        },
        "1.5.54.0": {
            cpu: "Intel Core i7-2600 (2nd generation)",
            ram: "8GB, 16GB(PDIP), 32GB(MAR)",
            hard_disk: "/",
            gpu: "Any GPU, 1 GB RAM, compatible with Open GL 3.2",
            cuda: "N/A",
            os: "Windows 10 (64 bit) or more",
        }
    },
}