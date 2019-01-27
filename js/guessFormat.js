/**
 * Guess file format based on extension
 * @return the guessed file format as a string
 */
module.exports = (fileName) => {

	fileName = fileName.toLowerCase();

	if (fileName === '' || typeof(fileName) !== 'string')
	{
		return 'Error: invalid file name';
	}

	let format;
	switch (true)
	{
		case /^.+\.(mp3|m4a|aac|mka|ogg|flac|wav|opus|wma)$/m.test(fileName):
			format = 'audio';
			break;
		case /^.+\.(m(kv|p4|[o4]v)|webm|avi|wmv|flv|3g[2p]|h264|mpe?g|swf|rm)$/m.test(fileName):
			format = 'video';
			break;
		case /^.+\.(jpe?g|png|gif|bmp|tiff|ico)$/m.test(fileName):
			format = 'image';
			break;
		case /^.+\.(abf|cha|[to]tf|woff2?|fo[nt]|fnt|eot|nftr|ttc|ufo)$/m.test(fileName):
			format = 'font';
			break;
		case /^.+\.(svg|ai|eps|ps)$/m.test(fileName):
			format = 'vector';
			break;
		case /^.+\.(c(pp|#|\+\+|offee|fm|gi|(las)?s)?|j(s|ava|ade)|ts|r(b|s|lib)?|php|aspx?|s?h|luac?|bat|vb[as]|re|ino|m(ac|atlab)|p(y[cod]?|pp|as|(er)?l)?|[lc]?hs|h[ab]s|c?hi|whl)$/m.test(fileName):
			format = 'code';
			break;
		case /^.+\.(zipx?|7z|[rt]ar|gz|bz2|jar)$/m.test(fileName):
			format = 'archive';
			break;
		case /^.+\.json$/m.test(fileName):
			format = 'json';
			break;
		case /^.+\.((x(ht)?|ht|ya)ml|htm|jsx|wiki|rss)$/m.test(fileName):
			format = 'markup';
			break;
		case /^.+\.(ini|conf)$/m.test(fileName):
			format = 'config';
			break;
		case /^.+\.(bson|p?db|dbp?)$/m.test(fileName):
			format = 'database';
			break;
		case /^.+\.md$/m.test(fileName):
			format = 'markdown';
			break;
		case /^.+\.(s(ub|rt|mi|sf)|ssa|ass|vtt|idx|psb|usf)$/m.test(fileName):
			format = 'subtitles'
			break;
		case /^.+\.(pp(tx?|s)|key|odp)$/m.test(fileName):
			format = 'presentation'
			break;
		default:
			format = 'other';
			break;
	}

	return format;
}
