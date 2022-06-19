var openpuff_desc = '<div class="left">'+
'<h3>OpenPuff is a professional steganography tool with unique features, suitable for highly sensitive data covert transmission.</h3>'+
'<br>'+
'<ul>'+
'<li style="margin-left:20px"><h3><b>Carrier chains</b>:<br>'+
'Data is split among many carriers. Only the correct carrier sequence enables unhiding. Moreover,'+
' up to 256Mb can be hidden, if you have enough carriers at disposal. Last carrier will be filled with'+
' random bits in order to make it undistinguishable from others.</h3></li>'+
'<li style="margin-left:20px"><h3><b>Supported formats</b>:<br>'+
'Images, audios, videos, flash, adobe.</h3></li>'+
'<li style="margin-left:20px"><h3><b>Layers of security</b>:<br>'+
'Data, before carrier injection, is encrypted (1), scrambled (2), whitened (3) and encoded (4).</h3></li>'+
'</ul>'+
'<br>'+
'<ol>'+
'<li style="margin-left:40px"><h3><b>Layer 1 - Modern multi-cryptography</b>:<br>'+
'A set of 16 modern <a href="./Cipher_Reference_Home.html">256bit open-source cryptography algorithms</a> (chosen from'+
' AES Process [1997-2000], NESSIE Process [2000-2003] and CRYPTREC Process [2000-2003])'+
' has been joined into a doublepassword multi-cryptography algorithm (256bit+256bit):'+
'<a href="./Cipher_Reference_Home.html#AES">AES</a>'+
' / <a href="./Cipher_Reference_Home.html#ANUBIS">Anubis</a>'+
' / <a href="./Cipher_Reference_Home.html#CAMELLIA">Camellia</a>'+
' / <a href="./Cipher_Reference_Home.html#CAST-256">Cast-256</a>'+
' / <a href="./Cipher_Reference_Home.html#CLEFIA">Clefia</a>'+
' / <a href="./Cipher_Reference_Home.html#FROG">FROG</a>'+
' / <a href="./Cipher_Reference_Home.html#HIEROCRYPT3">Hierocrypt3</a>'+
' / <a href="./Cipher_Reference_Home.html#IDEA-NXT">Idea-NXT</a>'+
' / <a href="./Cipher_Reference_Home.html#MARS">MARS</a>'+
' / <a href="./Cipher_Reference_Home.html#RC6">RC6</a>'+
' / <a href="./Cipher_Reference_Home.html#SAFER+">Safer+</a>'+
' / <a href="./Cipher_Reference_Home.html#SC2000">SC2000</a>'+
' / <a href="./Cipher_Reference_Home.html#SERPENT">Serpent</a>'+
' / <a href="./Cipher_Reference_Home.html#SPEED">Speed</a>'+
' / <a href="./Cipher_Reference_Home.html#TWOFISH">Twofish</a>'+
' / <a href="./Cipher_Reference_Home.html#UNICORN-A">Unicorn-A</a></h3></li>'+
'<li style="margin-left:40px"><h3><b>Layer 2 - CSPRNG based scrambling</b>:<br>'+
'Encrypted data is always scrambled to break any remaining stream pattern. A new'+
' cryptographically secure pseudo random number generator (CSPRNG) is seeded with a third'+
' password (256bit) and data is globally shuffled with random indexes.</h3></li>'+
'<li style="margin-left:40px"><h3><b>Layer 3 - CSPRNG based whitening</b>:<br>'+
'Scrambled data is always mixed with a high amount of noise, taken from an independent'+
' CSPRNG seeded with hardware entropy.</h3></li>'+
'<li style="margin-left:40px"><h3><b>Layer 4 - Adaptive non-linear encoding</b>:<br>'+
'Whitened data is always encoded using a non-linear function that takes also original carrier bits'+
' as input. Modified carriers will need much less change and deceive many <a href="./Randomness_Test_Home.html">steganalysis tests</a>'+
' (e.g.: chi square test).</h3></li>'+
'</ol>'+
'<br>'+
'<ul>'+
'<li style="margin-left:20px"><h3><b>Extra security - Deniable steganography</b>:<br>'+
'Top secret data can be protected using less secret data as a decoy.</h3></li>'+
'<li style="margin-left:20px"><h3><b>Source code</b>:<br>'+
'This program relies on the <a href="./libObfuscate_Cryptography_Home.html">libObfuscate</a> system-independent open-source library. Users and'+
' developers are absolutely free to link to the core library (100% of the cryptography & obfuscation code), read it and modify it.</h3></li>'+
'</ul>'+
'</div>';

document.write(openpuff_desc);