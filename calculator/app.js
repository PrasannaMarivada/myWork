const lis = document.querySelectorAll("ul li");
lis.forEach(node => {
    node.addEventListener('mousedown', function(e){
        e.preventDefault();
        const value = node.innerHTML.trim()
        const $result = document.querySelector(".result");
        const resultText = $result.innerHTML.trim();

        if(resultText == '0' || resultText == 'undefined' || resultText == 'Infinity'){
            $result.innerHTML = '';
        }
        if(value == '='){
            let solution = eval(resultText)
            $result.innerHTML = solution;
            return true;

        }

        if(value.toLocaleLowerCase() == 'c'){
            $result.innerHTML = ''
            return true;
        }
        $result.append(value)
    })
})