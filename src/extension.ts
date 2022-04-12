import { Extension, extensions, ExtensionContext, window } from 'vscode';
import * as path from 'path';

interface CortexDebug {
	registerSVDFile(expression: RegExp | string, path: string): void;
}

export function activate(context: ExtensionContext) {
	const cortexDebug: Extension<CortexDebug> = <Extension<CortexDebug>>extensions.getExtension('marus25.cortex-debug');
	if (!cortexDebug) {
		window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
		return;
	}

	cortexDebug.activate().then((cdbg) => {
		// EFR32MG24A010F1024
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)010(f|F)1024(i|I)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A010F1024IM40.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)010(f|F)1024(i|I)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A010F1024IM48.svd'));

		// EFR32MG24A010F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)010(f|F)1536(g|G)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A010F1536GM40.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)010(f|F)1536(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A010F1536GM48.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)010(f|F)1536(i|I)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A010F1536IM40.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)010(f|F)1536(i|I)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A010F1536IM48.svd'));

		// EFR32MG24A020F1024
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)020(f|F)1024(g|G)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A020F1024IM40.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)020(f|F)1024(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A020F1024IM48.svd'));

		// EFR32MG24A020F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)020(f|F)1536(g|G)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A020F1536GM40.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)020(f|F)1536(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A020F1536GM48.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)020(f|F)1536(i|I)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A020F1536IM40.svd'));
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)020(f|F)1536(i|I)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A020F1536IM48.svd'));

		// EFR32MG24A021F1024
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)021(f|F)1024(i|I)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A021F1024IM40.svd'));

		// EFR32MG24A110F1024
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)110(f|F)1024(i|I)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A110F1024IM48.svd'));

		// EFR32MG24A110F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)110(f|F)1536(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A110F1536GM48.svd'));

		// EFR32MG24A111F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)111(f|F)1536(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A111F1536GM48.svd'));

		// EFR32MG24A120F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)120(f|F)1536(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A120F1536GM48.svd'));

		// EFR32MG24A121F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)121(f|F)1536(g|G)(m|M)48.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A121F1536GM48.svd'));

		// EFR32MG24A610F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)610(f|F)1536(i|I)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A610F1536IM40.svd'));

		// EFR32MG24A620F1536
		cdbg.registerSVDFile(/^(EFR|efr)32(m|M)(g|G)24(a|A)620(f|F)1536(i|I)(m|M)40.*/i, path.join(context.extensionPath, 'data', 'EFR32MG24A620F1536IM40.svd'));

		console.log('Unable to activate cortexDebug');
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
