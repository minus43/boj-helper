import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'bojhelper.copyCode',
    async () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        vscode.window.showErrorMessage('No active editor found.');
        return;
      }

      let code = editor.document.getText();

      // public class Something → public class Main 변경
      code = code.replace(/public\s+class\s+\w+/, 'public class Main');

      // 클립보드에 복사
      await vscode.env.clipboard.writeText(code);

      vscode.window.showInformationMessage(
        'BOJ 코드가 Main으로 변환되고 복사되었습니다!'
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
