{
  "targets": [
    {
      "target_name": "addon",
      "sources": [
        "source/addon.cpp",
        "source/pppwrapper.cpp"
      ],
      "include_dirs": [
        "../install_release_x64",
        "include"
      ],
      "configurations": {
        "Debug": {
          "msvs_settings": {
            "VCCLCompilerTool": {
              "AdditionalOptions": [
                "/MDd"
              ]
            }
          }
        },
        "Release": {
          "msvs_settings": {
            "VCCLCompilerTool": {
              "AdditionalOptions": [
                "/MD"
              ]
            }
          }
        }
      },
      "conditions": [
        [
          "OS=='win'",
          {
            "libraries": [
              "..\\..\\install_release_x64\\libppp.lib"
            ]
          },
          "OS=='linux'",
          {
            "libraries": [
               "-Wl,-rpath,'$ORIGIN'", 
              "-L../../install_release_x64",
              "-llibppp"
            ],
            "cflags_cc": [
              "-fexceptions",
              "-fPIC",
              "-Wno-unknown-pragmas"
            ]
          }
        ]
      ]
    }
  ]
}
