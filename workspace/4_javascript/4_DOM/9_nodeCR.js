let el = document.createElement('div');
el.innerText = '조용준'
document.body.appendChild(el);

let childNodes = document.body.childNodes;
childNodes.forEach((Node) => {
    if(Node.nodeName === 'A'){ // -> nodeName 은 무조건 대문자 반환
        node.parentNode.removeChild(node);
    }
})