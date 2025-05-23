export function metadata() {
    return {
        "source": {
            "hash": "0x8ddde54208fd36a4ae43cd26b6037816f5d49836207ef17515179789cf0805e8",
            "language": "ink! 5.1.1",
            "compiler": "rustc 1.87.0-nightly",
            "build_info": {
                "build_mode": "Release",
                "cargo_contract_version": "3.2.0",
                "rust_toolchain": "nightly-aarch64-apple-darwin",
                "wasm_opt_settings": {
                    "keep_debug_symbols": false,
                    "optimization_passes": "Z"
                }
            }
        },
        "contract": {
            "name": "assets",
            "version": "0.1.0",
            "authors": [
                "Woodfish jasonholt20022gmail.com"
            ]
        },
        "spec": {
            "constructors": [
                {
                    "args": [],
                    "default": false,
                    "docs": [
                        "Constructor that initializes the assetverse contract"
                    ],
                    "label": "new",
                    "payable": false,
                    "returnType": {
                        "displayName": [
                            "ink_primitives",
                            "ConstructorResult"
                        ],
                        "type": 18
                    },
                    "selector": "0x9bae9d5e"
                }
            ],
            "docs": [],
            "environment": {
                "accountId": {
                    "displayName": [
                        "AccountId"
                    ],
                    "type": 4
                },
                "balance": {
                    "displayName": [
                        "Balance"
                    ],
                    "type": 1
                },
                "blockNumber": {
                    "displayName": [
                        "BlockNumber"
                    ],
                    "type": 31
                },
                "chainExtension": {
                    "displayName": [
                        "ChainExtension"
                    ],
                    "type": 32
                },
                "hash": {
                    "displayName": [
                        "Hash"
                    ],
                    "type": 30
                },
                "maxEventTopics": 4,
                "staticBufferSize": 16384,
                "timestamp": {
                    "displayName": [
                        "Timestamp"
                    ],
                    "type": 25
                }
            },
            "events": [
                {
                    "args": [
                        {
                            "docs": [
                                "The account ID of the newly created player."
                            ],
                            "indexed": true,
                            "label": "account",
                            "type": {
                                "displayName": [
                                    "AccountId"
                                ],
                                "type": 4
                            }
                        },
                        {
                            "docs": [
                                "The in-game name chosen by the player."
                            ],
                            "indexed": false,
                            "label": "name",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        }
                    ],
                    "docs": [
                        "Event emitted when a new player account is successfully created."
                    ],
                    "label": "PlayerCreated",
                    "module_path": "assets::assets",
                    "signature_topic": "0x49643ac39dc6ec0902776735685fe52d8e8a672436cf7490f4e73ca23d5dca95"
                },
                {
                    "args": [
                        {
                            "docs": [
                                "The game to which the asset belongs."
                            ],
                            "indexed": false,
                            "label": "game",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "docs": [
                                "The name of the asset added (e.g., weapon, skin, item)."
                            ],
                            "indexed": true,
                            "label": "name",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "docs": [
                                "The asset's price in native token units."
                            ],
                            "indexed": false,
                            "label": "price",
                            "type": {
                                "displayName": [
                                    "Balance"
                                ],
                                "type": 1
                            }
                        }
                    ],
                    "docs": [
                        "Event emitted when a new in-game asset is registered on-chain."
                    ],
                    "label": "AssetCreated",
                    "module_path": "assets::assets",
                    "signature_topic": "0xeb18a5ea7ec2afe85ec27f741b2c8b3591436121e425afa2b28d8c535caecce4"
                }
            ],
            "lang_error": {
                "displayName": [
                    "ink",
                    "LangError"
                ],
                "type": 19
            },
            "messages": [
                {
                    "args": [
                        {
                            "label": "name",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        }
                    ],
                    "default": false,
                    "docs": [
                        " Register a playing account across the network.",
                        " Players are endowed with 1M units of tokens at registration to buy game assets."
                    ],
                    "label": "register_player",
                    "mutates": true,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 18
                    },
                    "selector": "0x44c9d826"
                },
                {
                    "args": [],
                    "default": false,
                    "docs": [
                        " Returns a player account related to an `AccountId`."
                    ],
                    "label": "auth_player",
                    "mutates": true,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 20
                    },
                    "selector": "0x34928eec"
                },
                {
                    "args": [],
                    "default": false,
                    "docs": [
                        " Returns the registered games"
                    ],
                    "label": "games",
                    "mutates": false,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 22
                    },
                    "selector": "0x4c1db0e3"
                },
                {
                    "args": [
                        {
                            "label": "game",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "name",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "price",
                            "type": {
                                "displayName": [
                                    "Balance"
                                ],
                                "type": 1
                            }
                        }
                    ],
                    "default": false,
                    "docs": [
                        " Register an asset"
                    ],
                    "label": "register_asset",
                    "mutates": true,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 18
                    },
                    "selector": "0x763156d2"
                },
                {
                    "args": [
                        {
                            "label": "game",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        }
                    ],
                    "default": false,
                    "docs": [
                        " Get assets belonging to a game"
                    ],
                    "label": "assets",
                    "mutates": false,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 23
                    },
                    "selector": "0xc47d7428"
                },
                {
                    "args": [
                        {
                            "label": "game",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "asset",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "count",
                            "type": {
                                "displayName": [
                                    "u64"
                                ],
                                "type": 25
                            }
                        }
                    ],
                    "default": false,
                    "docs": [
                        " Buy units of an asset, deducting its price from the player's balance."
                    ],
                    "label": "purchase_asset",
                    "mutates": true,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 26
                    },
                    "selector": "0x907a5f68"
                },
                {
                    "args": [
                        {
                            "label": "receiver",
                            "type": {
                                "displayName": [
                                    "AccountId"
                                ],
                                "type": 4
                            }
                        },
                        {
                            "label": "asset",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "amount",
                            "type": {
                                "displayName": [
                                    "u64"
                                ],
                                "type": 25
                            }
                        }
                    ],
                    "default": false,
                    "docs": [
                        " Gift an asset to a specific player without charging them."
                    ],
                    "label": "gift_asset",
                    "mutates": true,
                    "payable": true,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 26
                    },
                    "selector": "0x6b538a1d"
                },
                {
                    "args": [
                        {
                            "label": "asset_give",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "units_give",
                            "type": {
                                "displayName": [
                                    "i64"
                                ],
                                "type": 29
                            }
                        },
                        {
                            "label": "asset_take",
                            "type": {
                                "displayName": [
                                    "String"
                                ],
                                "type": 0
                            }
                        },
                        {
                            "label": "units_take",
                            "type": {
                                "displayName": [
                                    "i64"
                                ],
                                "type": 29
                            }
                        }
                    ],
                    "default": false,
                    "docs": [],
                    "label": "exchange_asset",
                    "mutates": true,
                    "payable": false,
                    "returnType": {
                        "displayName": [
                            "ink",
                            "MessageResult"
                        ],
                        "type": 26
                    },
                    "selector": "0xe9af9c8a"
                }
            ]
        },
        "storage": {
            "root": {
                "layout": {
                    "struct": {
                        "fields": [
                            {
                                "layout": {
                                    "root": {
                                        "layout": {
                                            "struct": {
                                                "fields": [
                                                    {
                                                        "layout": {
                                                            "leaf": {
                                                                "key": "0x17e8cef2",
                                                                "ty": 0
                                                            }
                                                        },
                                                        "name": "name"
                                                    },
                                                    {
                                                        "layout": {
                                                            "leaf": {
                                                                "key": "0x17e8cef2",
                                                                "ty": 1
                                                            }
                                                        },
                                                        "name": "balance"
                                                    },
                                                    {
                                                        "layout": {
                                                            "leaf": {
                                                                "key": "0x17e8cef2",
                                                                "ty": 2
                                                            }
                                                        },
                                                        "name": "assets"
                                                    }
                                                ],
                                                "name": "Player"
                                            }
                                        },
                                        "root_key": "0x17e8cef2",
                                        "ty": 3
                                    }
                                },
                                "name": "players"
                            },
                            {
                                "layout": {
                                    "root": {
                                        "layout": {
                                            "leaf": {
                                                "key": "0x040d27f2",
                                                "ty": 12
                                            }
                                        },
                                        "root_key": "0x040d27f2",
                                        "ty": 14
                                    }
                                },
                                "name": "assets"
                            },
                            {
                                "layout": {
                                    "leaf": {
                                        "key": "0x00000000",
                                        "ty": 2
                                    }
                                },
                                "name": "games"
                            }
                        ],
                        "name": "Assets"
                    }
                },
                "root_key": "0x00000000",
                "ty": 17
            }
        },
        "types": [
            {
                "id": 0,
                "type": {
                    "def": {
                        "primitive": "str"
                    }
                }
            },
            {
                "id": 1,
                "type": {
                    "def": {
                        "primitive": "u128"
                    }
                }
            },
            {
                "id": 2,
                "type": {
                    "def": {
                        "sequence": {
                            "type": 0
                        }
                    }
                }
            },
            {
                "id": 3,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "params": [
                        {
                            "name": "K",
                            "type": 4
                        },
                        {
                            "name": "V",
                            "type": 7
                        },
                        {
                            "name": "KeyType",
                            "type": 8
                        }
                    ],
                    "path": [
                        "ink_storage",
                        "lazy",
                        "mapping",
                        "Mapping"
                    ]
                }
            },
            {
                "id": 4,
                "type": {
                    "def": {
                        "composite": {
                            "fields": [
                                {
                                    "type": 5,
                                    "typeName": "[u8; 32]"
                                }
                            ]
                        }
                    },
                    "path": [
                        "ink_primitives",
                        "types",
                        "AccountId"
                    ]
                }
            },
            {
                "id": 5,
                "type": {
                    "def": {
                        "array": {
                            "len": 32,
                            "type": 6
                        }
                    }
                }
            },
            {
                "id": 6,
                "type": {
                    "def": {
                        "primitive": "u8"
                    }
                }
            },
            {
                "id": 7,
                "type": {
                    "def": {
                        "composite": {
                            "fields": [
                                {
                                    "name": "name",
                                    "type": 0,
                                    "typeName": "String"
                                },
                                {
                                    "name": "balance",
                                    "type": 1,
                                    "typeName": "Balance"
                                },
                                {
                                    "name": "assets",
                                    "type": 2,
                                    "typeName": "Vec<String>"
                                }
                            ]
                        }
                    },
                    "path": [
                        "assets",
                        "assets",
                        "Player"
                    ]
                }
            },
            {
                "id": 8,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "params": [
                        {
                            "name": "L",
                            "type": 9
                        },
                        {
                            "name": "R",
                            "type": 10
                        }
                    ],
                    "path": [
                        "ink_storage_traits",
                        "impls",
                        "ResolverKey"
                    ]
                }
            },
            {
                "id": 9,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "path": [
                        "ink_storage_traits",
                        "impls",
                        "AutoKey"
                    ]
                }
            },
            {
                "id": 10,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "params": [
                        {
                            "name": "ParentKey",
                            "type": 11
                        }
                    ],
                    "path": [
                        "ink_storage_traits",
                        "impls",
                        "ManualKey"
                    ]
                }
            },
            {
                "id": 11,
                "type": {
                    "def": {
                        "tuple": []
                    }
                }
            },
            {
                "id": 12,
                "type": {
                    "def": {
                        "sequence": {
                            "type": 13
                        }
                    }
                }
            },
            {
                "id": 13,
                "type": {
                    "def": {
                        "tuple": [
                            0,
                            1
                        ]
                    }
                }
            },
            {
                "id": 14,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "params": [
                        {
                            "name": "K",
                            "type": 0
                        },
                        {
                            "name": "V",
                            "type": 12
                        },
                        {
                            "name": "KeyType",
                            "type": 15
                        }
                    ],
                    "path": [
                        "ink_storage",
                        "lazy",
                        "mapping",
                        "Mapping"
                    ]
                }
            },
            {
                "id": 15,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "params": [
                        {
                            "name": "L",
                            "type": 9
                        },
                        {
                            "name": "R",
                            "type": 16
                        }
                    ],
                    "path": [
                        "ink_storage_traits",
                        "impls",
                        "ResolverKey"
                    ]
                }
            },
            {
                "id": 16,
                "type": {
                    "def": {
                        "composite": {}
                    },
                    "params": [
                        {
                            "name": "ParentKey",
                            "type": 11
                        }
                    ],
                    "path": [
                        "ink_storage_traits",
                        "impls",
                        "ManualKey"
                    ]
                }
            },
            {
                "id": 17,
                "type": {
                    "def": {
                        "composite": {
                            "fields": [
                                {
                                    "name": "players",
                                    "type": 3,
                                    "typeName": "<Mapping<AccountId, Player> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<4073646103u32,\n()>,>>::Type"
                                },
                                {
                                    "name": "assets",
                                    "type": 14,
                                    "typeName": "<Mapping<String, Vec<(String, Balance)>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n4062645508u32, ()>,>>::Type"
                                },
                                {
                                    "name": "games",
                                    "type": 2,
                                    "typeName": "<Vec<String> as::ink::storage::traits::AutoStorableHint<::ink\n::storage::traits::ManualKey<1824059528u32, ()>,>>::Type"
                                }
                            ]
                        }
                    },
                    "path": [
                        "assets",
                        "assets",
                        "Assets"
                    ]
                }
            },
            {
                "id": 18,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "fields": [
                                        {
                                            "type": 11
                                        }
                                    ],
                                    "index": 0,
                                    "name": "Ok"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 19
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Err"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 11
                        },
                        {
                            "name": "E",
                            "type": 19
                        }
                    ],
                    "path": [
                        "Result"
                    ]
                }
            },
            {
                "id": 19,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "index": 1,
                                    "name": "CouldNotReadInput"
                                }
                            ]
                        }
                    },
                    "path": [
                        "ink_primitives",
                        "LangError"
                    ]
                }
            },
            {
                "id": 20,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "fields": [
                                        {
                                            "type": 21
                                        }
                                    ],
                                    "index": 0,
                                    "name": "Ok"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 19
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Err"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 21
                        },
                        {
                            "name": "E",
                            "type": 19
                        }
                    ],
                    "path": [
                        "Result"
                    ]
                }
            },
            {
                "id": 21,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "index": 0,
                                    "name": "None"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 7
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Some"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 7
                        }
                    ],
                    "path": [
                        "Option"
                    ]
                }
            },
            {
                "id": 22,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "fields": [
                                        {
                                            "type": 2
                                        }
                                    ],
                                    "index": 0,
                                    "name": "Ok"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 19
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Err"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 2
                        },
                        {
                            "name": "E",
                            "type": 19
                        }
                    ],
                    "path": [
                        "Result"
                    ]
                }
            },
            {
                "id": 23,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "fields": [
                                        {
                                            "type": 24
                                        }
                                    ],
                                    "index": 0,
                                    "name": "Ok"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 19
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Err"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 24
                        },
                        {
                            "name": "E",
                            "type": 19
                        }
                    ],
                    "path": [
                        "Result"
                    ]
                }
            },
            {
                "id": 24,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "index": 0,
                                    "name": "None"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 12
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Some"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 12
                        }
                    ],
                    "path": [
                        "Option"
                    ]
                }
            },
            {
                "id": 25,
                "type": {
                    "def": {
                        "primitive": "u64"
                    }
                }
            },
            {
                "id": 26,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "fields": [
                                        {
                                            "type": 27
                                        }
                                    ],
                                    "index": 0,
                                    "name": "Ok"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 19
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Err"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 27
                        },
                        {
                            "name": "E",
                            "type": 19
                        }
                    ],
                    "path": [
                        "Result"
                    ]
                }
            },
            {
                "id": 27,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "fields": [
                                        {
                                            "type": 11
                                        }
                                    ],
                                    "index": 0,
                                    "name": "Ok"
                                },
                                {
                                    "fields": [
                                        {
                                            "type": 28
                                        }
                                    ],
                                    "index": 1,
                                    "name": "Err"
                                }
                            ]
                        }
                    },
                    "params": [
                        {
                            "name": "T",
                            "type": 11
                        },
                        {
                            "name": "E",
                            "type": 28
                        }
                    ],
                    "path": [
                        "Result"
                    ]
                }
            },
            {
                "id": 28,
                "type": {
                    "def": {
                        "variant": {
                            "variants": [
                                {
                                    "index": 0,
                                    "name": "AssetNotFound"
                                },
                                {
                                    "index": 1,
                                    "name": "GameWithoutAssets"
                                },
                                {
                                    "index": 2,
                                    "name": "InsufficientBalance"
                                },
                                {
                                    "index": 3,
                                    "name": "PlayerNotFound"
                                },
                                {
                                    "index": 4,
                                    "name": "InsufficientAssetCount"
                                }
                            ]
                        }
                    },
                    "path": [
                        "assets",
                        "assets",
                        "ContractError"
                    ]
                }
            },
            {
                "id": 29,
                "type": {
                    "def": {
                        "primitive": "i64"
                    }
                }
            },
            {
                "id": 30,
                "type": {
                    "def": {
                        "composite": {
                            "fields": [
                                {
                                    "type": 5,
                                    "typeName": "[u8; 32]"
                                }
                            ]
                        }
                    },
                    "path": [
                        "ink_primitives",
                        "types",
                        "Hash"
                    ]
                }
            },
            {
                "id": 31,
                "type": {
                    "def": {
                        "primitive": "u32"
                    }
                }
            },
            {
                "id": 32,
                "type": {
                    "def": {
                        "variant": {}
                    },
                    "path": [
                        "ink_env",
                        "types",
                        "NoChainExtension"
                    ]
                }
            }
        ],
        "version": 5
    }
}