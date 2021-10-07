import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    await imagemin(['src/assets/screenshots/*.{jpg,jpeg,png}'], {
        destination: 'src/assets/screenshots/',
        plugins: [
            imageminJpegtran({
                progressive: true,
            }),
            imageminPngquant({
                quality: [0.6, 0.8],
            }),
        ],
    });
})();

// import fs from 'fs';
// import resizeImg from 'resize-img';
 
// (async () => {
//     const image = await resizeImg(fs.readFileSync('build/freemusic-1.jpg'), {
//         width: 800,
//     });
 
//     fs.writeFileSync('build/output.jpg', image);
// })();
