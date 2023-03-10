#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  //.option(' -h, --help', 'output usage information')
  .argument('<filepath1>')
  .argument('<filepath2>')

  program.parse();