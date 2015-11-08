// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

//fis.config.set('modules.parser.styl', 'stylus2');
//fis.config.set('settings.parser.stylus2.define', {enable: true, color: '#000'});//you can add your settings
//fis.config.set('settings.parser.stylus2.sourcemap', false);//use sourcemap or not, there are some bugs in stylus modules when it is opened
//fis.config.set('roadmap.ext.styl', 'css');

//使用fis-parser-jade插件编译jade文件
//fis.config.set('modules.parser.jade', 'jade');
//jade文件经过编译后输出为html文件
//fis.config.set('roadmap.ext.jade', 'html');

fis.match('*.js', {
	release: ''
});

fis.match('*.png', {
	release: ''
});

fis.match('*.styl', {
	parser: fis.plugin('stylus2'),
	rExt: '.css'
});

fis.match('*.jade', {
	parser: fis.plugin('jade'),
	rExt: '.html'
});


