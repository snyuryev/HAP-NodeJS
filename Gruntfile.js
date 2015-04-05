module.exports = function(grunt){
    grunt.initConfig({

        sftp: {
            deploy: {
                files: {
                    "./": "**/*"
                },
                options: {
                    host: 'salty.local',
                    username: 'root',
                    password: '12345678',
                    path: "/home/root/homekit/",
                    createDirectories: true,
                    showProgress: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ssh');
    grunt.registerTask('default', ['sftp:deploy']);
};





