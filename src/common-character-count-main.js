function getCommonCharacterCount(s1, s2) {
    let count = 0;
    for (let i=0; i<s1.length; i++){
        const char = s1[i];
        if(s2.includes(char)){
            count++;
            s2 = s2.replace(char,'');
        }
    }

    console.log(count)

}
