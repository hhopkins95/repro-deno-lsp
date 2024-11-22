import { Document } from "langchain/document"; // import resolves, but no lsp completion for submodules

import { SomethingThatDoesNotExist } from "langchain/asdf"; // do not get expected import error here -- see screenshot
const foo = SomethingThatDoesNotExist; // no error

import {} from "asdf"; // properly get an import error
