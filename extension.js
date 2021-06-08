/*
 * @Desc: 
 * @FilePath: /kefu-to-localhost/extension.js
 * @Author: liujianwei1
 * @Date: 2021-04-28 10:39:53
 * @LastEditors: liujianwei1
 * @Reference Desc: 
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const fs = require('fs-extra')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate (context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "extension" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.helloWorld', function (args) {
    // The code you place here will be executed every time your command is executed
    const data = fs.readFileSync(args.path, { encoding: 'utf8' })
    const content = data.replace(/(kefu.xesv5.com)|(\.kefu.xesv5.com)|(\.xesv5.com)/ig, 'localhost')
    fs.writeFileSync(args.path, content)
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from extension!')
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
function deactivate () { }

module.exports = {
  activate,
  deactivate
}
