function extractFile(input) {

    const parts = input.split('\\').pop().split('.');
    const extension = parts.pop();
    const fileName = parts.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
    
}
extractFile('C:\\Internal\\training-internal\\Template.hoho.bak.pptx');