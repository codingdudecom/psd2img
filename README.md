# psd2img
## Command line tool for transforming a Photoshop PSD file to image

*psd2img* is a command line tool that allows you to transform a Photoshop .psd file to images. It can also be used to extract all layers in a psd file to individual images. The tool is distributed as an exe file called psd2img.exe, which can also be installed using Chocolatey with the package name psd2img.

## Usage

To convert a PSD file to an image, use the following command:

```psd2img path/to/psd/file.psd [-o|--output path/to/output/image.png]```


To extract all layers of a PSD file to individual images, use the following command:

```psd2img path/to/psd/file.psd -l|--layers [-o|--output path/to/output/folder]```


If the -o or --output parameter is not specified, the output image or images will be saved in the same directory as the input PSD file.

## Requirements

psd2img requires the following software to be installed:

- Windows operating system
- .NET Framework 4.7.2 or later

## Installation

To [install psd2img using Chocolatey](https://community.chocolatey.org/profiles/MockoFun), run the following command:

```choco install psd2img```

## License

psd2img is licensed under the MIT License. See [LICENSE](https://github.com/codingdudecom/psd2img/blob/main/LICENSE) for more information.


<!-- choco push .\psd2img.1.0.0.nupkg --source https://push.chocolatey.org/ -->