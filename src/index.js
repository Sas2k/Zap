#!/usr/bin/env node
import { client } from "./api.js";
import { Command } from "commander"
import chalk from "chalk"

const Program = new Command()
let zap = new client();

Program
    .name("zap")
    .description("A light-weight Terminal API Client. built with Node.js \n Build By Sas2k.")
    .version("1.5.3", "-v, --version")
    .option("-vb, --verbose", "Verbosity")

// --main commands--

//  Get:
Program.command("get")
    .description(`sends a ${chalk.italic.blue('GET')} request to a url.`)
    .argument("url", "The Url")
    .aliases(["g", "G", "GET"])
    .option("-d, --download <file>", "The option to say to download the output")
    .option("-bd, --body <body>", "the request body")
    .action((url, options) => {
        zap.get_url(url, Program.opts().verbose, Program.opts().header, options.download)
    });

//  Post:
Program.command("post")
    .description(`Sends a ${chalk.italic.blue('POST')} request to a url`)
    .argument("url", "The URL")
    .argument("dataType", "The DataType [json, form, text, xml]")
    .argument("data", "The data")
    .aliases(["POST"])
    .action((url, dataType, data) => {
        zap.post_url(url, data, dataType, Program.opts().verbose, Program.opts().header)
    });

// Delete:
Program.command("delete")
    .description(`Sends a ${chalk.italic.blue('DELETE')} request to a URL.`)
    .argument("url", "The URL")
    .option("-bd, --body <body>", "the request body")
    .alias(["d", "D", "DELETE"])
    .action((url) => {
        zap.delete_url(url, Program.opts().verbose, Program.opts().header)
    });

// Put:
Program.command("put")
    .description(`Sends a ${chalk.italic.blue('PUT')} request to a URL`)
    .argument("url", "The URL")
    .argument("dataType", "The data type [json, xml, text, form]")
    .argument("data", `The data to ${chalk.italic.blue('PUT')}.`)
    .option("-bd, --body <body>", "the request body")
    .alias(["PUT"])
    .action((url, dataType, data) => {
        zap.put_url(url, dataType, data, Program.opts().verbose, Program.opts().header)
    })

//Running the program
Program.parse();
