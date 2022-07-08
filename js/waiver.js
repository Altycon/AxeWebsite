
/**
 *  Variables and Elements
 */

 const TermsAgreementInput = document.getElementById('TermsAgreementInput');


const WaiverForm = new FormData(document.getElementById('WaiverForm'));

const WaiverCanvas = document.getElementById('WaiverFrom_SignatureCanvas');


const openSignatureContainer = (ev)=>{
    const input = ev.target;
    if(input.checked === true){
        document.getElementById('WaiverForm').classList.add('open');
    }else{
        document.getElementById('WaiverForm').classList.remove('open');
    }
}

const initializeWaiver = ()=>{
    TermsAgreementInput.addEventListener('input', openSignatureContainer)
}
initializeWaiver();