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
    core: number;
    threads: number;
    clock: number;
    gpu_ram: string;
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "0.2.34.0" : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Graphic-based board on PCI Express video bus with minimum 512MB",
            cuda: "N/A",
            os: "Microsoft Windows 10 Home or higher",
            core: 6,
            threads: 6,
            clock: 3.0,
            gpu_ram: "0.5"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "0.2.303.0" : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Graphic-based board on PCI Express video bus with minimum 512MB",
            cuda: "N/A",
            os: "Microsoft Windows 10 Home or higher",
            core: 6,
            threads: 6,
            clock: 3.0,
            gpu_ram: "0.5"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.1.36.0 " : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "500 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Microsoft Windows 10 Home or higher",
            core: 6,
            threads: 6,
            clock: 3.0,
            gpu_ram: "4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.0.36.0" : {
            cpu: "9th Generation Intel Core i5-9500 6 cores",
            ram: "16 GB",
            hard_disk: "500 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Microsoft Windows 10 Home or higher",
            core: 6,
            threads: 6,
            clock: 3.0,
            gpu_ram: "4"
        }
    },
    "cs8200access" : {
        "---" : {
            cpu: "",
            ram: "",
            hard_disk: "",
            gpu: "",
            cuda: "",
            os: "",
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.0.12.0" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Microsoft Windows 10 Home or higher",
            core: 2,
            threads: 2,
            clock: 2.4,
            gpu_ram: "4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.0.375.0" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "16 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia based board with minimum 4 GB of video RAM",
            cuda: "10.1 or higher",
            os: "Microsoft Windows 10 Home or higher",
            core: 2,
            threads: 2,
            clock: 2.4,
            gpu_ram: "4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "0.5.0.47 " : {
            cpu: "1.8 GHz Intel Pentium IV",
            ram: "2 GB",
            hard_disk: "N/A",
            gpu: "128 MB (integrated or dedicated) OpenGL version 1.4 or higher",
            cuda: "N/A",
            os: "Microsoft Windows 8 Home or above",
            core: 1,
            threads: 1,
            clock: 1.8,
            gpu_ram: "0.2"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "0.5.0.47" : {
            cpu: "1.8 GHz Intel Pentium IV",
            ram: "2 GB",
            hard_disk: "N/A",
            gpu: "128 MB (integrated or dedicated) OpenGL version 1.4 or higher",
            cuda: "N/A",
            os: "Microsoft Windows 8 Home or above",
            core: 1,
            threads: 1,
            clock: 1.8,
            gpu_ram: "0.2"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.0.0.7 " : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI based board supporting Open Glide 1.2 with 256 MB of video RAM",
            cuda: "N/A",
            os: "Microsoft Windows 10 Professional or higher",
            core: 2,
            threads: 2,
            clock: 2.4,
            gpu_ram: "0.4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.0.0.7" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI based board supporting Open Glide 1.2 with 256 MB of video RAM",
            cuda: "N/A",
            os: "Microsoft Windows 10 Professional or higher",
            core: 2,
            threads: 2,
            clock: 2.4,
            gpu_ram: "0.4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.0.10.11" : {
            cpu: "2,4 Ghz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI based board supporting Open Glide 1.2 with 256 MB of video RAM",
            cuda: "N/A",
            os: "Microsoft Windows 10 Professional or higher",
            core: 2,
            threads: 2,
            clock: 2.4,
            gpu_ram: "0.4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "4.6.19.0-A " : {
            cpu: "2 GHz Intel Duo Core",
            ram: "2 GB",
            hard_disk: "80 GB",
            gpu: "Nvidia/ATI based board with 256 MB of RAM",
            cuda: "N/A",
            os: "Microsoft Windows 10 Home or higher",
            core: 2,
            threads: 2,
            clock: 2.0,
            gpu_ram: "0.4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "4.6.19.0-A" : {
            cpu: "2 GHz Intel Duo Core",
            ram: "2 GB",
            hard_disk: "80 GB",
            gpu: "Nvidia/ATI based board with 256 MB of RAM",
            cuda: "N/A",
            os: "Microsoft Windows 10 Home or higher",
            core: 2,
            threads: 2,
            clock: 2.0,
            gpu_ram: "0.4"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "5.4.5.7" : {
            cpu: "2 GHz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI-based board supporting Open GL 1.2 with 512 MB of video RAM",
            cuda: "N/A",
            os: "Microsoft Windows 7 Home or higher",
            core: 2,
            threads: 2,
            clock: 2.0,
            gpu_ram: "0.5"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "2.4.4.2-C": {
            cpu: "2.4 GHz Intel Duo Core",
            ram: "4 GB",
            hard_disk: "250 GB",
            gpu: "Nvidia/ATI-based board supporting Open GL 1.2 with 512 MB of video RAM",
            cuda: "N/A",
            os: "Microsoft Windows 7 Home or higher",
            core: 2,
            threads: 2,
            clock: 2.4,
            gpu_ram: "0.5"
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
            core: 0,
            threads: 0,
            clock: 0,
            gpu_ram: ""
        },
        "1.5.54.0": {
            cpu: "Intel Core i7-2600 (2nd generation) 3.40GHz",
            ram: "8 GB - 16 GB (PDIP) - 32 GB (MAR)",
            hard_disk: "N/A",
            gpu: "Any GPU, 1 GB RAM, compatible with Open GL 3.2",
            cuda: "N/A",
            os: "Microsoft Windows 10 Home or higher",
            core: 4,
            threads: 8,
            clock: 3.4,
            gpu_ram: "1"
        }
    },
}