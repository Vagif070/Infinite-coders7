var vgButton = document.querySelector('#btnvg');
var vgp = document.getElementsByClassName('forvg')[0];
var cntv=0;
function btnFuncVG(event) {
    event.preventDefault();
    if (cntv%2==1) {
        vgp.style.visibility = 'hidden';
        vgButton.textContent='Click for Information';
    }else{
        vgp.style.visibility = 'visible';
        vgButton.textContent="Click to Close";
    }
    cntv=cntv+1;
}


vgButton.addEventListener('click', btnFuncVG);

var lsButton=document.querySelector('#btnls');
var lsp = document.getElementsByClassName('forls')[0];
var cntl=0;
function btnFuncLS(event) {
    event.preventDefault();
    if (cntl%2==1) {
        lsp.style.visibility='hidden';
        lsButton.textContent='Click for Information';
    }else{
        lsp.style.visibility='visible';
        lsButton.textContent="Click to Close";
    }
    cntl=cntl+1;
}
lsButton.addEventListener('click', btnFuncLS);


var zgButton=document.querySelector('#btnzg');
var zgp=document.getElementsByClassName('forzg')[0];
var cntz=0;
function btnFuncZG(event) {
    event.preventDefault();
    if (cntz%2==1) {
        zgp.style.visibility='hidden'
        zgButton.textContent="Click to Information";
    }else{
        zgp.style.visibility='visible';
        zgButton.textContent="Click to Close";
    }
    cntz=cntz+1;
}
zgButton.addEventListener('click', btnFuncZG);


var kiButton=document.querySelector('#btnki');
var kip=document.getElementsByClassName('forki')[0];
var cntk=0;
function btnFuncKI(event) {
    event.preventDefault();
    if (cntk%2==1) {
        kip.style.visibility='hidden';
        kiButton.textContent="Click to Information";
    }else{
        kip.style.visibility='visible';
        kiButton.textContent="Click to Close";
    }
    cntk=cntk+1;
}
kiButton.addEventListener('click', btnFuncKI);