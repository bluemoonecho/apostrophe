const moduleA = {
  commands: {
    add: {
      '@apostrophecms/command-menu:toggle-shortcuts': {
        type: 'item',
        label: 'commandMenuShortcutToggleShortcuts',
        action: {
          type: 'toggle-shortcuts',
          payload: {}
        },
        shortcut: 'Shift+K ?'
      }
    },
    modal: {
      null: {
        '@apostrophecms/command-menu:content': {
          label: 'commandMenuContent',
          fields: [
            'apostrophe:undo',
            'apostrophe:redo',
            '@apostrophecms/command-menu:toggle-shortcuts'
          ]
        }
      }
    }
  }
};
const moduleB = {
  commands: {
    add: {
      '@apostrophecms/command-menu:test': {
        type: 'item',
        label: 'commandMenuShortcutTest',
        action: {
          type: 'test',
          payload: {}
        },
        shortcut: 'Shift+G'
      }
    },
    modal: {
      null: {
        '@apostrophecms/command-menu:content': {
          label: 'commandMenuContent',
          fields: [
            'apostrophe:discard-draft',
            'apostrophe:publish-draft',
            '@apostrophecms/command-menu:test'
          ]
        }
      }
    }
  }
};
const moduleC = {
  commands: {
    remove: [
      '@apostrophecms/command-menu:test'
    ],
    modal: {
      null: {
        '@apostrophecms/command-menu:modes': {
          label: 'commandMenuModes',
          fields: [
            'apostrophe:toggle-edit-preview-mode',
            'apostrophe:toggle-publish-draft-mode'
          ]
        }
      }
    }
  }
};
const moduleD = {
  commands: {
    add: {
      '@apostrophecms/command-menu:toggle-shortcuts': {
        shortcut: '?'
      }
    },
    group: {
      '@apostrophecms/command-menu:general': {
        label: 'commandMenuGeneral',
        fields: [
          '@apostrophecms/command-menu:toggle-shortcuts',
          'command-menu'
        ]
      }
    }
  }
};
const article = {
  commands: {
    add: {
      'article:create-new': {
        type: 'item',
        label: 'apostrophe:commandMenuCreateNew',
        action: {},
        shortcut: '',
        modal: 'article:manager'
      },
      'article:search': {
        type: 'item',
        label: 'apostrophe:commandMenuSearch',
        action: {},
        shortcut: '',
        modal: 'article:manager'
      },
      'article:select-all': {
        type: 'item',
        label: 'apostrophe:commandMenuSelectAll',
        action: {},
        shortcut: '',
        modal: 'article:manager'
      },
      'article:archive-selected': {
        type: 'item',
        label: 'apostrophe:commandMenuArchiveSelected',
        action: {},
        shortcut: '',
        modal: 'article:manager'
      },
      'article:exit-manager': {
        type: 'item',
        label: 'apostrophe:commandMenuExitManager',
        action: {},
        shortcut: '',
        modal: 'article:manager'
      }
    },
    modal: {
      'article:manager': {
        '@apostrophecms/command-menu:manager': {
          label: null,
          fields: [
            'article:create-new',
            'article:search',
            'article:select-all',
            'article:archive-selected',
            'article:exit-manager'
          ]
        }
      }
    }
  }
};
const topic = {
  commands: {
    add: {
      'topic:create-new': {
        type: 'item',
        label: 'apostrophe:commandMenuCreateNew',
        action: {},
        shortcut: ''
      },
      'topic:search': {
        type: 'item',
        label: 'apostrophe:commandMenuSearch',
        action: {},
        shortcut: ''
      },
      'topic:select-all': {
        type: 'item',
        label: 'apostrophe:commandMenuSelectAll',
        action: {},
        shortcut: ''
      },
      'topic:archive-selected': {
        type: 'item',
        label: 'apostrophe:commandMenuArchiveSelected',
        action: {},
        shortcut: ''
      },
      'topic:exit-manager': {
        type: 'item',
        label: 'apostrophe:commandMenuExitManager',
        action: {},
        shortcut: ''
      }
    },
    modal: {
      'topic:manager': {
        '@apostrophecms/command-menu:manager': {
          label: null,
          fields: [
            'topic:create-new',
            'topic:search',
            'topic:select-all',
            'topic:archive-selected',
            'topic:exit-manager'
          ]
        }
      }
    }
  }
};

module.exports = {
  moduleA,
  moduleB,
  moduleC,
  moduleD,
  article,
  topic
};
