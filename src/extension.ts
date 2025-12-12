import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('BOJ Helper activated!');

  // ===============================
  // 1) BOJ: Copy code with Main class
  // ===============================
  const copyCodeCommand = vscode.commands.registerCommand(
    'bojhelper.copyCode',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage('No active editor.');
        return;
      }

      const original = editor.document.getText();

      // public class ??? -> public class Main
      const replaced = original.replace(
        /public\s+class\s+\w+/,
        'public class Main'
      );

      await vscode.env.clipboard.writeText(replaced);

      vscode.window.showInformationMessage(
        'BOJ code copied with class name changed to Main!'
      );
    }
  );

  // ===============================
  // 2) BOJ: Create Java file from URL
  // ===============================
  const createFileCommand = vscode.commands.registerCommand(
    'bojhelper.createFile',
    async () => {
      // 1) URL 입력받기
      const url = await vscode.window.showInputBox({
        prompt:
          'Enter BOJ problem URL (e.g., https://www.acmicpc.net/problem/xxxx)',
        placeHolder: 'https://www.acmicpc.net/problem/XXXX',
      });

      if (!url) return;

      const match = url.match(/problem\/(\d+)/);
      if (!match) {
        vscode.window.showErrorMessage('Invalid BOJ URL.');
        return;
      }

      const problemNumber = match[1];
      const fileName = `Boj${problemNumber}.java`;

      // 2) 생성 경로 입력받기
      const inputPath = await vscode.window.showInputBox({
        prompt:
          'Enter folder path to create the file (e.g., src/boj or leave empty for workspace root)',
        placeHolder: 'src/boj',
        value: '',
      });

      // 3) 워크스페이스 확인
      const workspace = vscode.workspace.workspaceFolders?.[0];
      if (!workspace) {
        vscode.window.showErrorMessage('No workspace folder is open.');
        return;
      }

      // 4) 기본 root 또는 입력받은 경로로 설정
      const targetFolder =
        inputPath && inputPath.trim().length > 0
          ? vscode.Uri.joinPath(workspace.uri, inputPath)
          : workspace.uri;

      // 폴더 생성 (없으면 만들어줌)
      await vscode.workspace.fs.createDirectory(targetFolder);

      // 최종 파일 경로
      const filePath = vscode.Uri.joinPath(targetFolder, fileName);

      // 5) 기본 템플릿
      const template = `import java.io.*; 

public class Boj${problemNumber} {
    public static void main(String[] args) throws Exception {
    }
}
`;

      try {
        await vscode.workspace.fs.writeFile(
          filePath,
          Buffer.from(template, 'utf8')
        );
        vscode.window.showInformationMessage(
          `Created ${fileName} at ${inputPath || 'workspace root'}`
        );
        vscode.window.showTextDocument(filePath);
      } catch (err) {
        vscode.window.showErrorMessage('Failed to create file: ' + err);
      }
    }
  );

  context.subscriptions.push(copyCodeCommand, createFileCommand);
}

export function deactivate() {}
