ആവട്ടെ അക്കങ്ങള്‍ = ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"];

പ്രയോഗം മലയക്കം (വാക്യം, ഇംഗ്ലീഷിലേക്ക് = തെറ്റ്) {  
  ആവട്ടെ മാറ്റിയവാക്യം = '',
        അക്ഷരം;
  // കിട്ടിയ വാക്യത്തിലെ ഓരോ അക്ഷരങ്ങളായി പോവുക
  // ഇത് ഒരു ലൂപ്പാണ്
  ഇന് (ആവട്ടെ സ്ഥാനം ഇല്‍ വാക്യം) {
    അക്ഷരം = വാക്യം[സ്ഥാനം];
    
    // മലയാളത്തില്‍ നിന്ന് ഇംഗ്ലീഷിലേക്കാക്കാനാണോ ?
    ആണെങ്കിൽ (ഇംഗ്ലീഷിലേക്ക്) {
      ആണെങ്കിൽ (അക്കങ്ങള്‍.ന്റെസൂചിക(അക്ഷരം) !== -1) {
        മാറ്റിയവാക്യം += അക്കങ്ങള്‍.ന്റെസൂചിക(അക്ഷരം);
        തുടരുക; // അടുത്ത അക്ഷരത്തിലേക്ക് പൊക്കോ
      }
    } അല്ലെങ്കിൽ {
      // ഇത് ഒരു അക്കമാണോ ?
      ആണെങ്കിൽ (അക്ഷരം >= 0 && അക്ഷരം <= 9) {
        മാറ്റിയവാക്യം += അക്കങ്ങള്‍[അക്ഷരം];
        തുടരുക; // അടുത്ത അക്ഷരത്തിലേക്ക് പൊക്കോ
      }
    }
    മാറ്റിയവാക്യം += അക്ഷരം;
  }
  മടക്കം മാറ്റിയവാക്യം;
}

window.മലയക്കം = മലയക്കം;
