// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  IStateDB
} from '@jupyterlab/apputils';

import {
  IDocumentManager
} from '@jupyterlab/docmanager';

import {
  IServiceManager
} from '@jupyterlab/services';

import {
  CommandRegistry
} from '@phosphor/commands';

import {
  Token
} from '@phosphor/coreutils';

import {
  FileBrowser
} from './browser';


/* tslint:disable */
/**
 * The path tracker token.
 */
export
const IFileBrowserFactory = new Token<IFileBrowserFactory>('jupyter.services.file-browser');
/* tslint:enable */


/**
 * The file browser factory interface.
 */
export
interface IFileBrowserFactory {
  /**
   * Create a new file browser instance.
   */
  createFileBrowser(options?: IFileBrowserFactory.IOptions): FileBrowser;
}


/**
 * A namespace for file browser factory interfaces.
 */
export
namespace IFileBrowserFactory {
  /**
   * The options for creating a file browser using a file browser factory.
   *
   * #### Notes
   * In future versions of JupyterLab, these options may disappear altogether,
   * which is a backward-incompatible API change and will necessitate a new
   * version release. This is because in future versions, there will likely be
   * an application-wide notion of a singleton document manager, a single
   * command registry, a single services manager, and a single state database.
   */
  export
  interface IOptions {
    /**
     * The command registry used by the file browser.
     *
     * #### Notes
     * If no command registry is provided, the application default will be used.
     */
    commands?: CommandRegistry;

    /**
     * The document manager used by the file browser.
     *
     * #### Notes
     * If no manager is provided, the application default will be used.
     */
    documentManager?: IDocumentManager;

    /**
     * The service manager used by the file browser.
     *
     * #### Notes
     * If no manager is provided, the application default will be used.
     */
    serviceManager?: IServiceManager;

    /**
     * The state database to use for saving file browser state and restoring it.
     *
     * #### Notes
     * Unless the value `null` is set for this option, the application state
     * database will be automatically passed in and used for state restoration.
     */
    state?: IStateDB | null;
  }
}
