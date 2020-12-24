export function wrapText(context, text, x, maxWidth, maxHeight, lineHeight) {
    let words = text.split(' ');
    let line = '';
    let lines = [];

    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n];
        if (n !== words.length - 1) {
            testLine += ' ';
        }
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    let textBlockHeight = lines.length * lineHeight + (lines.length - 1) * 5;
    let y = (maxHeight - textBlockHeight + lineHeight) / 2;


    for (let i = 0; i < lines.length; i++) {
        if (lines[i].charAt(0) === ' '){
            lines[i] = lines[i].slice(1);
        }
        if (lines[i].charAt(lines[i].length - 1) === ' '){
            lines[i] = lines[i].substring(0, lines[i].length - 1);
        }
        context.fillText(lines[i], x, y);
        y += lineHeight + 5;
    }
}

export function getBase64Image(src, font_size, text_color, font, text) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            let dataURL;
            //to resize image into 500x500 square:
            let size = img.naturalHeight;
            let sy = 0;
            let sx = (img.naturalWidth - size) / 2;
            if (size > img.naturalWidth) {
                sy = (size - img.naturalWidth) / 2;
                size = img.naturalWidth;
                sx = 0;
            }
            canvas.height = 500;
            canvas.width = 500;

            ctx.drawImage(img, sx, sy, size, size, 0, 0, canvas.width, canvas.height);

            if (text !== undefined) {
                console.log("drawing. text: " + font_size);
                ctx.font = font_size + "px " + font;
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.textBaseline = 'middle';

                let maxWidth = 490;
                let lineHeight = font_size - 0.001;
                let x = canvas.width / 2;

                wrapText(ctx, text, x, maxWidth, canvas.height, lineHeight);
            }
            dataURL = canvas.toDataURL('image/jpeg');
            resolve(dataURL);
        };
        img.onerror = reject;
        img.src = src;
    })
}