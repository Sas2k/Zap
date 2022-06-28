#!/usr/bin/env node
import { client } from "./api.js";
import { Command } from "commander"
import chalk from "chalk"

const program = new Command()
let zap = new client();

program
    .name("zap")
    .description("A Terminal API Client.")
    .version("1.0.0")

// --main commands--

//  Get:
program.command("get")
    .description(`sends a ${chalk.italic.blue('GET')} request to a url.`)
    .argument("url", "The Url")
    .option("-vb, --verboose", "Verboosity")
    .aliases(["g", "G", "GET"])
    .action((url, options) => {
        zap.get_url(url, options.verboose)
    });

//  Post:
program.command("post")
    .description(`Sends a ${chalk.italic.blue('POST')} request to a url`)
    .argument("url", "The URL")
    .argument("dataType", "The DataType [json, form, text, xml]")
    .argument("data", "The data")
    .option("-vb, --verboose", "Verboosity")
    .aliases(["POST"])
    .action((url, dataType, data , options) => {
        zap.post_url(url, data, dataType, options.verboose)
    });

// Delete:
program.command("delete")
    .description(`Sends a ${chalk.italic.blue('DELETE')} request to a URL.`)
    .argument("url", "The URL")
    .option("-vb, --verboose", "Verboosity")
    .alias(["d", "D", "DELETE"])
    .action((url, options) => {
        zap.delete_url(url, options.verboose)
    });

// Put:
program.command("put")
    .description(`Sends a ${chalk.italic.blue('PUT')} request to a URL`)
    .argument("url", "The URL")
    .argument("dataType", "The data type [json, xml, text, form]")
    .argument("data", `The data to ${chalk.italic.blue('PUT')}.`)
    .option("-vb, --verboose", "Verboosity")
    .alias(["PUT"])
    .action((url, dataType, data, options) => {
        zap.put_url(url, dataType, data, options.verboose)
    })

//Running the program
program.parse();