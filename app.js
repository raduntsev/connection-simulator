(()=>{
'use strict';
const W=1160,H=890,DT=20e-6;
const JACKS=[{"id":"P1","x":69,"y":171,"label":"+5 В"},{"id":"P2","x":98,"y":172,"label":"+5 В"},{"id":"P3","x":123,"y":171,"label":"+5 В"},{"id":"P4","x":150,"y":171,"label":"+5 В"},{"id":"P5","x":179,"y":171,"label":"+5 В"},{"id":"P6","x":206,"y":172,"label":"+5 В"},{"id":"GND1","x":112,"y":842,"label":"Общий (0 В)"},{"id":"GND2","x":133,"y":842,"label":"Общий (0 В)"},{"id":"GND3","x":155,"y":842,"label":"Общий (0 В)"},{"id":"GND4","x":182,"y":842,"label":"Общий (0 В)"},{"id":"GND5","x":203,"y":842,"label":"Общий (0 В)"},{"id":"GND6","x":225,"y":842,"label":"Общий (0 В)"},{"id":"SA1","x":193,"y":241,"label":"SA1 выход"},{"id":"SA2","x":197,"y":322,"label":"SA2 выход"},{"id":"SA3.t","x":140,"y":382,"label":"SA3 верхнее"},{"id":"SA3.c","x":170,"y":402,"label":"SA3 общее"},{"id":"SA3.b","x":141,"y":424,"label":"SA3 нижнее"},{"id":"LSA3","x":199,"y":401,"label":"Светодиод SA3 (вход)"},{"id":"SA4.t","x":143,"y":463,"label":"SA4 верхнее"},{"id":"SA4.c","x":172,"y":481,"label":"SA4 общее"},{"id":"SA4.b","x":144,"y":503,"label":"SA4 нижнее"},{"id":"LSA4","x":200,"y":480,"label":"Светодиод SA4 (вход)"},{"id":"SA5a.t","x":121,"y":520,"label":"SA5 контакт a верхнее"},{"id":"SA5a.c","x":121,"y":553,"label":"SA5 контакт a общее"},{"id":"SA5a.b","x":121,"y":587,"label":"SA5 контакт a нижнее"},{"id":"SA5b.t","x":167,"y":520,"label":"SA5 контакт b верхнее"},{"id":"SA5b.c","x":169,"y":554,"label":"SA5 контакт b общее"},{"id":"SA5b.b","x":169,"y":587,"label":"SA5 контакт b нижнее"},{"id":"SA6a.t","x":122,"y":607,"label":"SA6 контакт a верхнее"},{"id":"SA6a.c","x":123,"y":640,"label":"SA6 контакт a общее"},{"id":"SA6a.b","x":124,"y":674,"label":"SA6 контакт a нижнее"},{"id":"SA6b.t","x":169,"y":607,"label":"SA6 контакт b верхнее"},{"id":"SA6b.c","x":170,"y":640,"label":"SA6 контакт b общее"},{"id":"SA6b.b","x":171,"y":673,"label":"SA6 контакт b нижнее"},{"id":"SB1.1","x":150,"y":695,"label":"SB1 (кнопка) верх"},{"id":"SB1.2","x":152,"y":733,"label":"SB1 (кнопка) низ"},{"id":"SB2.1","x":153,"y":770,"label":"SB2 (кнопка) верх"},{"id":"SB2.2","x":153,"y":810,"label":"SB2 (кнопка) низ"},{"id":"LSB1","x":207,"y":694,"label":"Светодиод SB1 (вход)"},{"id":"LSB2","x":209,"y":769,"label":"Светодиод SB2 (вход)"},{"id":"K1.coil","x":252,"y":183,"label":"K1 катушка"},{"id":"K1.1.nc","x":356,"y":168,"label":"K1.1 размык. (NC)"},{"id":"K1.1.c","x":389,"y":168,"label":"K1.1 общий"},{"id":"K1.1.no","x":423,"y":167,"label":"K1.1 замык. (NO)"},{"id":"K1.2.nc","x":356,"y":186,"label":"K1.2 размык. (NC)"},{"id":"K1.2.c","x":389,"y":185,"label":"K1.2 общий"},{"id":"K1.2.no","x":423,"y":185,"label":"K1.2 замык. (NO)"},{"id":"K1.3.nc","x":356,"y":204,"label":"K1.3 размык. (NC)"},{"id":"K1.3.c","x":389,"y":204,"label":"K1.3 общий"},{"id":"K1.3.no","x":424,"y":205,"label":"K1.3 замык. (NO)"},{"id":"K1.4.nc","x":355,"y":221,"label":"K1.4 размык. (NC)"},{"id":"K1.4.c","x":389,"y":222,"label":"K1.4 общий"},{"id":"K1.4.no","x":424,"y":222,"label":"K1.4 замык. (NO)"},{"id":"K2.coil","x":253,"y":268,"label":"K2 катушка"},{"id":"K2.1.nc","x":357,"y":252,"label":"K2.1 размык. (NC)"},{"id":"K2.1.c","x":390,"y":252,"label":"K2.1 общий"},{"id":"K2.1.no","x":425,"y":253,"label":"K2.1 замык. (NO)"},{"id":"K2.2.nc","x":356,"y":271,"label":"K2.2 размык. (NC)"},{"id":"K2.2.c","x":390,"y":271,"label":"K2.2 общий"},{"id":"K2.2.no","x":425,"y":272,"label":"K2.2 замык. (NO)"},{"id":"K2.3.nc","x":356,"y":289,"label":"K2.3 размык. (NC)"},{"id":"K2.3.c","x":390,"y":288,"label":"K2.3 общий"},{"id":"K2.3.no","x":424,"y":290,"label":"K2.3 замык. (NO)"},{"id":"K2.4.nc","x":357,"y":307,"label":"K2.4 размык. (NC)"},{"id":"K2.4.c","x":391,"y":308,"label":"K2.4 общий"},{"id":"K2.4.no","x":424,"y":307,"label":"K2.4 замык. (NO)"},{"id":"K3.coil","x":257,"y":354,"label":"K3 катушка"},{"id":"K3.1.nc","x":358,"y":338,"label":"K3.1 размык. (NC)"},{"id":"K3.1.c","x":391,"y":339,"label":"K3.1 общий"},{"id":"K3.1.no","x":426,"y":338,"label":"K3.1 замык. (NO)"},{"id":"K3.2.nc","x":357,"y":355,"label":"K3.2 размык. (NC)"},{"id":"K3.2.c","x":391,"y":356,"label":"K3.2 общий"},{"id":"K3.2.no","x":427,"y":356,"label":"K3.2 замык. (NO)"},{"id":"K3.3.nc","x":357,"y":373,"label":"K3.3 размык. (NC)"},{"id":"K3.3.c","x":392,"y":375,"label":"K3.3 общий"},{"id":"K3.3.no","x":426,"y":376,"label":"K3.3 замык. (NO)"},{"id":"K3.4.nc","x":358,"y":391,"label":"K3.4 размык. (NC)"},{"id":"K3.4.c","x":392,"y":393,"label":"K3.4 общий"},{"id":"K3.4.no","x":426,"y":391,"label":"K3.4 замык. (NO)"},{"id":"K4.coil","x":257,"y":438,"label":"K4 катушка"},{"id":"K4.1.nc","x":359,"y":422,"label":"K4.1 размык. (NC)"},{"id":"K4.1.c","x":392,"y":422,"label":"K4.1 общий"},{"id":"K4.1.no","x":427,"y":422,"label":"K4.1 замык. (NO)"},{"id":"K4.2.nc","x":359,"y":439,"label":"K4.2 размык. (NC)"},{"id":"K4.2.c","x":393,"y":441,"label":"K4.2 общий"},{"id":"K4.2.no","x":427,"y":441,"label":"K4.2 замык. (NO)"},{"id":"K4.3.nc","x":360,"y":457,"label":"K4.3 размык. (NC)"},{"id":"K4.3.c","x":393,"y":458,"label":"K4.3 общий"},{"id":"K4.3.no","x":428,"y":458,"label":"K4.3 замык. (NO)"},{"id":"K4.4.nc","x":359,"y":475,"label":"K4.4 размык. (NC)"},{"id":"K4.4.c","x":394,"y":476,"label":"K4.4 общий"},{"id":"K4.4.no","x":428,"y":475,"label":"K4.4 замык. (NO)"},{"id":"K5.coil","x":260,"y":521,"label":"K5 катушка"},{"id":"K5.1.nc","x":360,"y":506,"label":"K5.1 размык. (NC)"},{"id":"K5.1.c","x":394,"y":505,"label":"K5.1 общий"},{"id":"K5.1.no","x":428,"y":505,"label":"K5.1 замык. (NO)"},{"id":"K5.2.nc","x":360,"y":524,"label":"K5.2 размык. (NC)"},{"id":"K5.2.c","x":394,"y":523,"label":"K5.2 общий"},{"id":"K5.2.no","x":429,"y":523,"label":"K5.2 замык. (NO)"},{"id":"K5.3.nc","x":361,"y":543,"label":"K5.3 размык. (NC)"},{"id":"K5.3.c","x":394,"y":541,"label":"K5.3 общий"},{"id":"K5.3.no","x":428,"y":542,"label":"K5.3 замык. (NO)"},{"id":"K5.4.nc","x":361,"y":558,"label":"K5.4 размык. (NC)"},{"id":"K5.4.c","x":395,"y":559,"label":"K5.4 общий"},{"id":"K5.4.no","x":428,"y":558,"label":"K5.4 замык. (NO)"},{"id":"DD1.1.a","x":472,"y":158,"label":"DD1.1 вход 1"},{"id":"DD1.1.b","x":472,"y":175,"label":"DD1.1 вход 2"},{"id":"DD1.1.y","x":545,"y":167,"label":"DD1.1 выход"},{"id":"DD1.2.a","x":473,"y":194,"label":"DD1.2 вход 1"},{"id":"DD1.2.b","x":472,"y":212,"label":"DD1.2 вход 2"},{"id":"DD1.2.y","x":546,"y":204,"label":"DD1.2 выход"},{"id":"DD1.3.a","x":473,"y":231,"label":"DD1.3 вход 1"},{"id":"DD1.3.b","x":472,"y":249,"label":"DD1.3 вход 2"},{"id":"DD1.3.y","x":546,"y":241,"label":"DD1.3 выход"},{"id":"DD1.4.a","x":472,"y":268,"label":"DD1.4 вход 1"},{"id":"DD1.4.b","x":472,"y":286,"label":"DD1.4 вход 2"},{"id":"DD1.4.y","x":545,"y":278,"label":"DD1.4 выход"},{"id":"DD4.1.a","x":568,"y":157,"label":"DD4.1 вход 1"},{"id":"DD4.1.b","x":568,"y":175,"label":"DD4.1 вход 2"},{"id":"DD4.1.y","x":643,"y":167,"label":"DD4.1 выход"},{"id":"DD4.2.a","x":568,"y":194,"label":"DD4.2 вход 1"},{"id":"DD4.2.b","x":568,"y":213,"label":"DD4.2 вход 2"},{"id":"DD4.2.y","x":642,"y":203,"label":"DD4.2 выход"},{"id":"DD4.3.a","x":568,"y":231,"label":"DD4.3 вход 1"},{"id":"DD4.3.b","x":568,"y":249,"label":"DD4.3 вход 2"},{"id":"DD4.3.y","x":642,"y":241,"label":"DD4.3 выход"},{"id":"DD4.4.a","x":569,"y":269,"label":"DD4.4 вход 1"},{"id":"DD4.4.b","x":569,"y":287,"label":"DD4.4 вход 2"},{"id":"DD4.4.y","x":642,"y":278,"label":"DD4.4 выход"},{"id":"DD6.1.a","x":664,"y":158,"label":"DD6.1 вход 1"},{"id":"DD6.1.b","x":665,"y":175,"label":"DD6.1 вход 2"},{"id":"DD6.1.y","x":739,"y":167,"label":"DD6.1 выход"},{"id":"DD6.2.a","x":665,"y":194,"label":"DD6.2 вход 1"},{"id":"DD6.2.b","x":664,"y":212,"label":"DD6.2 вход 2"},{"id":"DD6.2.y","x":739,"y":204,"label":"DD6.2 выход"},{"id":"DD6.3.a","x":665,"y":231,"label":"DD6.3 вход 1"},{"id":"DD6.3.b","x":665,"y":249,"label":"DD6.3 вход 2"},{"id":"DD6.3.y","x":739,"y":241,"label":"DD6.3 выход"},{"id":"DD6.4.a","x":665,"y":269,"label":"DD6.4 вход 1"},{"id":"DD6.4.b","x":664,"y":287,"label":"DD6.4 вход 2"},{"id":"DD6.4.y","x":739,"y":279,"label":"DD6.4 выход"},{"id":"DD9.1.a","x":762,"y":157,"label":"DD9.1 вход 1"},{"id":"DD9.1.b","x":762,"y":175,"label":"DD9.1 вход 2"},{"id":"DD9.1.y","x":836,"y":166,"label":"DD9.1 выход"},{"id":"DD9.2.a","x":761,"y":195,"label":"DD9.2 вход 1"},{"id":"DD9.2.b","x":762,"y":213,"label":"DD9.2 вход 2"},{"id":"DD9.2.y","x":835,"y":205,"label":"DD9.2 выход"},{"id":"DD9.3.a","x":761,"y":231,"label":"DD9.3 вход 1"},{"id":"DD9.3.b","x":761,"y":250,"label":"DD9.3 вход 2"},{"id":"DD9.3.y","x":835,"y":242,"label":"DD9.3 выход"},{"id":"DD9.4.a","x":760,"y":270,"label":"DD9.4 вход 1"},{"id":"DD9.4.b","x":761,"y":287,"label":"DD9.4 вход 2"},{"id":"DD9.4.y","x":834,"y":278,"label":"DD9.4 выход"},{"id":"DD2.1.a","x":473,"y":322,"label":"DD2.1 вход 1"},{"id":"DD2.1.b","x":473,"y":340,"label":"DD2.1 вход 2"},{"id":"DD2.1.c","x":474,"y":358,"label":"DD2.1 вход 3"},{"id":"DD2.1.y","x":547,"y":341,"label":"DD2.1 выход"},{"id":"DD2.2.a","x":474,"y":376,"label":"DD2.2 вход 1"},{"id":"DD2.2.b","x":474,"y":395,"label":"DD2.2 вход 2"},{"id":"DD2.2.c","x":474,"y":414,"label":"DD2.2 вход 3"},{"id":"DD2.2.y","x":547,"y":395,"label":"DD2.2 выход"},{"id":"DD2.3.a","x":475,"y":431,"label":"DD2.3 вход 1"},{"id":"DD2.3.b","x":475,"y":450,"label":"DD2.3 вход 2"},{"id":"DD2.3.c","x":475,"y":468,"label":"DD2.3 вход 3"},{"id":"DD2.3.y","x":547,"y":450,"label":"DD2.3 выход"},{"id":"DD5.1.a","x":569,"y":323,"label":"DD5.1 вход 1"},{"id":"DD5.1.b","x":569,"y":340,"label":"DD5.1 вход 2"},{"id":"DD5.1.c","x":569,"y":359,"label":"DD5.1 вход 3"},{"id":"DD5.1.y","x":642,"y":342,"label":"DD5.1 выход"},{"id":"DD5.2.a","x":569,"y":378,"label":"DD5.2 вход 1"},{"id":"DD5.2.b","x":570,"y":395,"label":"DD5.2 вход 2"},{"id":"DD5.2.c","x":570,"y":413,"label":"DD5.2 вход 3"},{"id":"DD5.2.y","x":642,"y":397,"label":"DD5.2 выход"},{"id":"DD5.3.a","x":570,"y":432,"label":"DD5.3 вход 1"},{"id":"DD5.3.b","x":570,"y":449,"label":"DD5.3 вход 2"},{"id":"DD5.3.c","x":570,"y":468,"label":"DD5.3 вход 3"},{"id":"DD5.3.y","x":641,"y":450,"label":"DD5.3 выход"},{"id":"DD7.1.a","x":664,"y":322,"label":"DD7.1 вход 1"},{"id":"DD7.1.b","x":663,"y":341,"label":"DD7.1 вход 2"},{"id":"DD7.1.c","x":664,"y":360,"label":"DD7.1 вход 3"},{"id":"DD7.1.y","x":737,"y":341,"label":"DD7.1 выход"},{"id":"DD7.2.a","x":664,"y":378,"label":"DD7.2 вход 1"},{"id":"DD7.2.b","x":663,"y":396,"label":"DD7.2 вход 2"},{"id":"DD7.2.c","x":664,"y":414,"label":"DD7.2 вход 3"},{"id":"DD7.2.y","x":737,"y":396,"label":"DD7.2 выход"},{"id":"DD7.3.a","x":663,"y":432,"label":"DD7.3 вход 1"},{"id":"DD7.3.b","x":663,"y":450,"label":"DD7.3 вход 2"},{"id":"DD7.3.c","x":664,"y":468,"label":"DD7.3 вход 3"},{"id":"DD7.3.y","x":735,"y":451,"label":"DD7.3 выход"},{"id":"DD10.1.a","x":760,"y":323,"label":"DD10.1 вход 1"},{"id":"DD10.1.b","x":760,"y":339,"label":"DD10.1 вход 2"},{"id":"DD10.1.c","x":759,"y":360,"label":"DD10.1 вход 3"},{"id":"DD10.1.y","x":834,"y":342,"label":"DD10.1 выход"},{"id":"DD10.2.a","x":759,"y":379,"label":"DD10.2 вход 1"},{"id":"DD10.2.b","x":758,"y":396,"label":"DD10.2 вход 2"},{"id":"DD10.2.c","x":759,"y":413,"label":"DD10.2 вход 3"},{"id":"DD10.2.y","x":832,"y":397,"label":"DD10.2 выход"},{"id":"DD10.3.a","x":758,"y":433,"label":"DD10.3 вход 1"},{"id":"DD10.3.b","x":759,"y":450,"label":"DD10.3 вход 2"},{"id":"DD10.3.c","x":758,"y":468,"label":"DD10.3 вход 3"},{"id":"DD10.3.y","x":832,"y":450,"label":"DD10.3 выход"},{"id":"DD3.1.R","x":476,"y":499,"label":"DD3.1 R"},{"id":"DD3.1.D","x":475,"y":519,"label":"DD3.1 D"},{"id":"DD3.1.C","x":475,"y":539,"label":"DD3.1 C"},{"id":"DD3.1.S","x":476,"y":559,"label":"DD3.1 S"},{"id":"DD3.1.Q","x":548,"y":507,"label":"DD3.1 Q"},{"id":"DD3.1.Qn","x":548,"y":548,"label":"DD3.1 Q̅"},{"id":"DD3.2.R","x":571,"y":499,"label":"DD3.2 R"},{"id":"DD3.2.D","x":570,"y":518,"label":"DD3.2 D"},{"id":"DD3.2.C","x":570,"y":539,"label":"DD3.2 C"},{"id":"DD3.2.S","x":570,"y":559,"label":"DD3.2 S"},{"id":"DD3.2.Q","x":642,"y":508,"label":"DD3.2 Q"},{"id":"DD3.2.Qn","x":642,"y":548,"label":"DD3.2 Q̅"},{"id":"DD8.1.R","x":663,"y":499,"label":"DD8.1 R"},{"id":"DD8.1.D","x":664,"y":519,"label":"DD8.1 D"},{"id":"DD8.1.C","x":663,"y":539,"label":"DD8.1 C"},{"id":"DD8.1.S","x":664,"y":559,"label":"DD8.1 S"},{"id":"DD8.1.Q","x":736,"y":509,"label":"DD8.1 Q"},{"id":"DD8.1.Qn","x":735,"y":550,"label":"DD8.1 Q̅"},{"id":"DD8.2.R","x":758,"y":501,"label":"DD8.2 R"},{"id":"DD8.2.D","x":757,"y":520,"label":"DD8.2 D"},{"id":"DD8.2.C","x":758,"y":540,"label":"DD8.2 C"},{"id":"DD8.2.S","x":758,"y":559,"label":"DD8.2 S"},{"id":"DD8.2.Q","x":831,"y":510,"label":"DD8.2 Q"},{"id":"DD8.2.Qn","x":831,"y":550,"label":"DD8.2 Q̅"},{"id":"R1.in","x":258,"y":635,"label":"R1 вход"},{"id":"R1.n","x":432,"y":637,"label":"R1/C1 общая точка"},{"id":"C1.bot","x":410,"y":672,"label":"C1 нижний вывод"},{"id":"R2.in","x":256,"y":709,"label":"R2 вход"},{"id":"R2.n","x":432,"y":708,"label":"R2/C2 общая точка"},{"id":"C2.bot","x":412,"y":743,"label":"C2 нижний вывод"},{"id":"R3.in","x":259,"y":780,"label":"R3 вход"},{"id":"R3.n","x":434,"y":780,"label":"R3/C3 общая точка"},{"id":"C3.bot","x":412,"y":815,"label":"C3 нижний вывод"},{"id":"VD1.a","x":260,"y":843,"label":"Диод VD1 анод"},{"id":"VD1.k","x":307,"y":842,"label":"Диод VD1 катод"},{"id":"VD2.a","x":338,"y":843,"label":"Диод VD2 анод"},{"id":"VD2.k","x":385,"y":843,"label":"Диод VD2 катод"},{"id":"VD3.a","x":414,"y":843,"label":"Диод VD3 анод"},{"id":"VD3.k","x":459,"y":844,"label":"Диод VD3 катод"},{"id":"B1.1","x":571,"y":845,"label":"Свободный узел (гнёзда соединены)"},{"id":"B1.2","x":615,"y":845,"label":"Свободный узел (гнёзда соединены)"},{"id":"B1.3","x":660,"y":844,"label":"Свободный узел (гнёзда соединены)"},{"id":"B2.1","x":751,"y":845,"label":"Свободный узел (гнёзда соединены)"},{"id":"B2.2","x":794,"y":845,"label":"Свободный узел (гнёзда соединены)"},{"id":"B2.3","x":839,"y":845,"label":"Свободный узел (гнёзда соединены)"},{"id":"B3.1","x":930,"y":846,"label":"Свободный узел (гнёзда соединены)"},{"id":"B3.2","x":974,"y":845,"label":"Свободный узел (гнёзда соединены)"},{"id":"B3.3","x":1018,"y":846,"label":"Свободный узел (гнёзда соединены)"},{"id":"X1","x":490,"y":643,"label":"X1 (вход светодиода VD1)"},{"id":"X2","x":524,"y":644,"label":"X2 (вход светодиода VD2)"},{"id":"X3","x":556,"y":644,"label":"X3 (вход светодиода VD3)"},{"id":"X4","x":591,"y":644,"label":"X4 (вход светодиода VD4)"},{"id":"X5","x":623,"y":643,"label":"X5 (вход светодиода VD5)"},{"id":"X6","x":490,"y":676,"label":"X6 (вход светодиода VD6)"},{"id":"X7","x":524,"y":676,"label":"X7 (вход светодиода VD7)"},{"id":"X8","x":557,"y":676,"label":"X8 (вход светодиода VD8)"},{"id":"X9","x":590,"y":676,"label":"X9 (вход светодиода VD9)"},{"id":"X10","x":623,"y":677,"label":"X10 (вход светодиода VD10)"},{"id":"X11","x":490,"y":709,"label":"X11 (вход светодиода VD11)"},{"id":"X12","x":523,"y":710,"label":"X12 (вход светодиода VD12)"},{"id":"X13","x":556,"y":711,"label":"X13 (вход светодиода VD13)"},{"id":"X14","x":590,"y":710,"label":"X14 (вход светодиода VD14)"},{"id":"X15","x":623,"y":710,"label":"X15 (вход светодиода VD15)"},{"id":"X16","x":490,"y":743,"label":"X16 (вход светодиода VD16)"},{"id":"X17","x":524,"y":742,"label":"X17 (вход светодиода VD17)"},{"id":"X18","x":556,"y":743,"label":"X18 (вход светодиода VD18)"},{"id":"X19","x":590,"y":743,"label":"X19 (вход светодиода VD19)"},{"id":"X20","x":623,"y":743,"label":"X20 (вход светодиода VD20)"},{"id":"X21","x":491,"y":774,"label":"X21 (вход светодиода VD21)"},{"id":"X22","x":524,"y":775,"label":"X22 (вход светодиода VD22)"},{"id":"X23","x":557,"y":775,"label":"X23 (вход светодиода VD23)"},{"id":"X24","x":590,"y":775,"label":"X24 (вход светодиода VD24)"},{"id":"X25","x":623,"y":775,"label":"X25 (вход светодиода VD25)"},{"id":"X26","x":491,"y":806,"label":"X26 (вход светодиода VD26)"},{"id":"X27","x":524,"y":808,"label":"X27 (вход светодиода VD27)"},{"id":"X28","x":557,"y":807,"label":"X28 (вход светодиода VD28)"},{"id":"X29","x":590,"y":808,"label":"X29 (вход светодиода VD29)"},{"id":"X30","x":623,"y":808,"label":"X30 (вход светодиода VD30)"},{"id":"CT1.CN","x":909,"y":627,"label":"Счётчик 1: CN (счёт)"},{"id":"CT1.R","x":908,"y":659,"label":"Счётчик 1: R (сброс)"},{"id":"CT1.8","x":987,"y":617,"label":"Счётчик 1: выход 8"},{"id":"CT1.4","x":987,"y":633,"label":"Счётчик 1: выход 4"},{"id":"CT1.2","x":987,"y":651,"label":"Счётчик 1: выход 2"},{"id":"CT1.1","x":985,"y":669,"label":"Счётчик 1: выход 1"},{"id":"CT2.CN","x":907,"y":696,"label":"Счётчик 2: CN (счёт)"},{"id":"CT2.R","x":906,"y":728,"label":"Счётчик 2: R (сброс)"},{"id":"CT2.8","x":985,"y":686,"label":"Счётчик 2: выход 8"},{"id":"CT2.4","x":983,"y":700,"label":"Счётчик 2: выход 4"},{"id":"CT2.2","x":985,"y":721,"label":"Счётчик 2: выход 2"},{"id":"CT2.1","x":983,"y":737,"label":"Счётчик 2: выход 1"},{"id":"GEN10","x":931,"y":814,"label":"Генератор 10 Гц"},{"id":"GEN100","x":986,"y":813,"label":"Генератор 100 Гц"},{"id":"GEN1k","x":1041,"y":814,"label":"Генератор 1 кГц"},{"id":"Q1","x":907,"y":555,"label":"Q1 (выход реле ONI)"},{"id":"Q2","x":943,"y":556,"label":"Q2 (выход реле ONI)"},{"id":"Q3","x":977,"y":555,"label":"Q3 (выход реле ONI)"},{"id":"Q4","x":1011,"y":555,"label":"Q4 (выход реле ONI)"},{"id":"Q5","x":1045,"y":555,"label":"Q5 (выход реле ONI)"},{"id":"Q6","x":1080,"y":556,"label":"Q6 (выход реле ONI)"}];
const JI={};JACKS.forEach((j,i)=>{j.i=i;JI[j.id]=i;});
const J=id=>{if(!(id in JI))throw new Error('нет гнезда '+id);return JI[id];};
const N=JACKS.length;
const $=s=>document.querySelector(s);
const NS='http://www.w3.org/2000/svg';
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs||{})e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}
const rnd=(a,b)=>a+Math.random()*(b-a),irnd=(a,b)=>Math.floor(rnd(a,b+1)),clamp=(x,a,b)=>x<a?a:x>b?b:x;

/* ================= модель стенда ================= */
const state={power:false,t:0,k:0,tPower:0,speed:1};
const P={ // параметры (редактируются в панели)
  relayOn:9e-3,relayOff:13e-3,
  tgBreak:3,tgMake:8,rlBreak:2,rlMake:4,
  chatMin:40e-6,chatMax:450e-6
};
const parent=new Int32Array(N);
function find(x){while(parent[x]!==x){parent[x]=parent[parent[x]];x=parent[x];}return x;}
function union(a,b){a=find(a);b=find(b);if(a!==b)parent[a]=b;}
const bonds=[];
function bond(ids){for(let k=1;k<ids.length;k++)bonds.push([J(ids[0]),J(ids[k])]);}
bond(['P1','P2','P3','P4','P5','P6']);
bond(['GND1','GND2','GND3','GND4','GND5','GND6']);
for(let b=1;b<=3;b++)bond([`B${b}.1`,`B${b}.2`,`B${b}.3`]);

const pins=[],drvs=[];
function mkPin(id,kind){const p={j:J(id),kind,s:kind==='up'};pins.push(p);return p;}
function mkDrv(id,g){const d={j:J(id),v:0,g:g||1/60,on:true,node:-3};drvs.push(d);return d;}

// логические элементы
const gates=[];
const GCFG={DD1:['or',4,2],DD4:['and',4,2],DD6:['nand',4,2],DD9:['nand',4,2],DD2:['or',3,3],DD5:['or',3,3],DD7:['nand',3,3],DD10:['nand',3,3]};
for(const dd in GCFG){const [type,cnt,nin]=GCFG[dd];for(let e=1;e<=cnt;e++){const ins=[];for(let k=0;k<nin;k++)ins.push(mkPin(`${dd}.${e}.${'abc'[k]}`,'up'));gates.push({name:`${dd}.${e}`,type,ins,out:mkDrv(`${dd}.${e}.y`)});}}
// D-триггеры
const dffs=['DD3.1','DD3.2','DD8.1','DD8.2'].map(n=>({name:n,R:mkPin(n+'.R','up'),D:mkPin(n+'.D','up'),C:mkPin(n+'.C','up'),S:mkPin(n+'.S','up'),Q:mkDrv(n+'.Q'),Qn:mkDrv(n+'.Qn'),q:false,cp:true}));
// счётчики
const cnts=[1,2].map(k=>({k,CN:mkPin(`CT${k}.CN`,'down'),R:mkPin(`CT${k}.R`,'down'),bits:[8,4,2,1].map(w=>({w,d:mkDrv(`CT${k}.${w}`)})),n:0,cp:false}));
// генераторы
const gens=[['GEN10',10],['GEN100',100],['GEN1k',1000]].map(([id,f])=>({d:mkDrv(id),f}));
// светодиоды-индикаторы
const leds={};
for(let i=1;i<=30;i++)leds['X'+i]={pin:mkPin('X'+i,'led'),g:0};
for(const id of['LSA3','LSA4','LSB1','LSB2'])leds[id]={pin:mkPin(id,'led'),g:0};
// переключатели (контакты)
const sws=[];
function mkSw(com,a,b,pos){const s={com:J(com),a:a?J(a):-1,b:b?J(b):-1,pos,stable:pos,tok:0,hi:null,lo:null};sws.push(s);return s;}
const poles={};
for(const n of['SA3','SA4'])poles[n]=[mkSw(n+'.c',n+'.t',n+'.b',1)];
poles.SA5=[mkSw('SA5a.c','SA5a.t','SA5a.b',1),mkSw('SA5b.c','SA5b.t','SA5b.b',1)];
poles.SA6=[mkSw('SA6a.c','SA6a.t','SA6a.b',1),mkSw('SA6b.c','SA6b.t','SA6b.b',1)];
const btn={SB1:mkSw('SB1.1','SB1.2',null,2),SB2:mkSw('SB2.1','SB2.2',null,2)};
// SA1 — со встроенной защитой от дребезга, SA2 — без
const sa1={d:mkDrv('SA1',1/100),up:false};sa1.d.v=0;
const sa2={sw:null,hi:mkDrv('SA2',1/100),lo:mkDrv('SA2',1/100)};
sa2.sw={pos:1,stable:1,tok:0,kind:'sa2'};sa2.hi.on=false;sa2.lo.on=true;
// реле
const relays=[1,2,3,4,5].map(n=>({n,coil:mkPin(`K${n}.coil`,'coil'),cmd:false,mech:false,tok:0,
  sw:[1,2,3,4].map(r=>mkSw(`K${n}.${r}.c`,`K${n}.${r}.nc`,`K${n}.${r}.no`,0))}));
// RC-узел и диоды
const RV=[240,1000,3300],CV=[0.47e-6,1e-6,3.3e-6];
const Rs=[1,2,3].map(i=>({i,p:J(`R${i}.in`),q:J(`R${i}.n`),val:RV[0],idx:0}));
const Cs=[1,2,3].map(i=>({i,p:J(`R${i}.n`),q:J(`C${i}.bot`),val:CV[0],idx:0}));
const Ds=[1,2,3].map(i=>({i,p:J(`VD${i}.a`),q:J(`VD${i}.k`),on:false}));
const allLinks=[];
Rs.forEach(e=>allLinks.push({t:'R',e,p:e.p,q:e.q}));
Cs.forEach(e=>allLinks.push({t:'C',e,p:e.p,q:e.q}));
Ds.forEach(e=>allLinks.push({t:'D',e,p:e.p,q:e.q}));
sws.forEach(s=>{if(s.a>=0)allLinks.push({t:'S',e:s,side:0,p:s.com,q:s.a});if(s.b>=0)allLinks.push({t:'S',e:s,side:1,p:s.com,q:s.b});});

/* ============ топология ============ */
let wires=[],wid=1;
let jn=new Int32Array(N).fill(-3);
let comps=[],V=new Float64Array(1),loc=new Int32Array(1),shorted=false,vcc=0,gndRoot=0,vccRoot=0;
function compile(){
  for(let i=0;i<N;i++)parent[i]=i;
  bonds.forEach(b=>union(b[0],b[1]));wires.forEach(w=>union(w.a,w.b));
  gndRoot=find(J('GND1'));vccRoot=find(J('P1'));shorted=gndRoot===vccRoot;
  const isF=r=>r===gndRoot||r===vccRoot;
  const wiredJ=new Uint8Array(N);wires.forEach(w=>{wiredJ[w.a]=1;wiredJ[w.b]=1;});
  const act=new Set();
  for(let j=0;j<N;j++)if(wiredJ[j]){const r=find(j);if(!isF(r))act.add(r);}
  const live=allLinks.map(()=>false);
  let ch=true;
  while(ch){ch=false;allLinks.forEach((L,i)=>{if(live[i])return;const rp=find(L.p),rq=find(L.q),fp=isF(rp),fq=isF(rq);
    if(fp&&fq)return;
    if(wiredJ[L.p]||wiredJ[L.q]||(!fp&&act.has(rp))||(!fq&&act.has(rq))){live[i]=true;if(!fp)act.add(rp);if(!fq)act.add(rq);ch=true;}});}
  const nodeOfRoot=new Map();let nn=0;act.forEach(r=>nodeOfRoot.set(r,nn++));
  jn=new Int32Array(N);
  for(let j=0;j<N;j++){const r=find(j);jn[j]=r===gndRoot?-1:r===vccRoot?-2:(nodeOfRoot.has(r)?nodeOfRoot.get(r):-3);}
  if(shorted)for(let j=0;j<N;j++)if(find(j)===gndRoot)jn[j]=-1;
  V=new Float64Array(Math.max(1,nn));loc=new Int32Array(Math.max(1,nn));
  // компоненты
  const cp=new Int32Array(nn);for(let i=0;i<nn;i++)cp[i]=i;
  const cf=x=>{while(cp[x]!==x){cp[x]=cp[cp[x]];x=cp[x];}return x;};
  const linkEls=[];
  allLinks.forEach((L,i)=>{if(!live[i])return;const a=jn[L.p],b=jn[L.q];if(a<0&&b<0)return;linkEls.push({L,a,b});if(a>=0&&b>=0){const x=cf(a),y=cf(b);if(x!==y)cp[x]=y;}});
  const byRoot=new Map();
  for(let i=0;i<nn;i++){const r=cf(i);if(!byRoot.has(r))byRoot.set(r,{nodes:[],links:[],thevs:[],loads:[],hasD:false});byRoot.get(r).nodes.push(i);}
  linkEls.forEach(x=>{const n=x.a>=0?x.a:x.b;const c=byRoot.get(cf(n));c.links.push(x);if(x.L.t==='D')c.hasD=true;});
  drvs.forEach(d=>{const n=jn[d.j];d.node=n;if(n>=0)byRoot.get(cf(n)).thevs.push(d);});
  pins.forEach(p=>{const n=jn[p.j];if(n>=0){const c=byRoot.get(cf(n));const g=p.kind==='up'?1/4000:p.kind==='down'?1e-4:p.kind==='coil'?1/3000:1/1000;c.loads.push({node:n,g,up:p.kind==='up'});}});
  comps=[];byRoot.forEach(c=>{const m=c.nodes.length;c.A=new Float64Array(m*m);c.b=new Float64Array(m);c.vp=new Float64Array(m);c.nodes.forEach((n,i)=>loc[n]=i);comps.push(c);});
  const w=$('#warn');if(w)w.hidden=!shorted;
  redrawLevels();
}
function nodeV(code){return code>=0?V[code]:code===-1?0:vcc;}
const GON=10;
function gauss(A,b,m){
  for(let c=0;c<m;c++){let p=c,mx=Math.abs(A[c*m+c]);for(let r=c+1;r<m;r++){const v=Math.abs(A[r*m+c]);if(v>mx){mx=v;p=r;}}
    if(p!==c){for(let k=c;k<m;k++){const t=A[c*m+k];A[c*m+k]=A[p*m+k];A[p*m+k]=t;}const t=b[c];b[c]=b[p];b[p]=t;}
    const piv=A[c*m+c];
    for(let r=c+1;r<m;r++){const f=A[r*m+c]/piv;if(f===0)continue;for(let k=c;k<m;k++)A[r*m+k]-=f*A[c*m+k];b[r]-=f*b[c];}}
  for(let r=m-1;r>=0;r--){let s=b[r];for(let k=r+1;k<m;k++)s-=A[r*m+k]*b[k];b[r]=s/A[r*m+r];}
}
function solveComp(c){
  const m=c.nodes.length,A=c.A,b=c.b,vp=c.vp;
  for(let i=0;i<m;i++)vp[i]=V[c.nodes[i]];
  const pv=code=>code>=0?vp[loc[code]]:code===-1?0:vcc;
  const iters=c.hasD?4:1;
  for(let it=0;it<iters;it++){
    A.fill(0);b.fill(0);
    for(let i=0;i<m;i++)A[i*m+i]=1e-9;
    for(const x of c.links){
      const L=x.L,a=x.a,bb=x.b;let g=0,is=0,isb=0;
      if(L.t==='R')g=1/L.e.val;
      else if(L.t==='C'){g=L.e.val/DT;const vd=pv(a)-pv(bb);is=g*vd;}
      else if(L.t==='S'){if(L.e.pos!==L.side)continue;g=GON;}
      else if(L.t==='D'){if(!L.e.on)continue;g=0.2;is=g*0.62;} // модель: Uпр=0.62 В, r=5 Ом
      const ia=a>=0?loc[a]:-1,ib=bb>=0?loc[bb]:-1;
      if(ia>=0){A[ia*m+ia]+=g;if(ib>=0)A[ia*m+ib]-=g;else if(bb===-2)b[ia]+=g*vcc;b[ia]+=is;}
      if(ib>=0){A[ib*m+ib]+=g;if(ia>=0)A[ib*m+ia]-=g;else if(a===-2)b[ib]+=g*vcc;b[ib]-=is;}
    }
    for(const d of c.thevs){if(!d.on)continue;const i=loc[d.node];A[i*m+i]+=d.g;b[i]+=d.g*d.v;}
    for(const l of c.loads){const i=loc[l.node];A[i*m+i]+=l.g;if(l.up)b[i]+=l.g*vcc;}
    gauss(A,b,m);
    for(let i=0;i<m;i++)V[c.nodes[i]]=b[i];
    if(!c.hasD)break;
    let chg=false;
    for(const x of c.links){if(x.L.t!=='D')continue;const e=x.L.e;const vd=nodeV(x.a)-nodeV(x.b);const on=vd>0.55;if(on!==e.on){e.on=on;chg=true;}}
    if(!chg)break;
  }
}

/* ============ события и дребезг ============ */
const evq=[];
function schedule(dt,fn){const t=state.t+dt;let i=evq.length;while(i>0&&evq[i-1].t>t)i--;evq.splice(i,0,{t,fn});}
function runEvents(){while(evq.length&&evq[0].t<=state.t)evq.shift().fn();}
function chat(){return rnd(P.chatMin,P.chatMax);}
function bouncePlan(from,to,nB,nM,transit){
  const seq=[];let t=0;
  if(from!==2){seq.push([t,2]);const nb=irnd(0,nB);for(let i=0;i<nb;i++){t+=chat();seq.push([t,from]);t+=chat();seq.push([t,2]);}}
  if(to!==2){t+=rnd(transit[0],transit[1]);seq.push([t,to]);const nm=irnd(0,nM);for(let i=0;i<nm;i++){t+=chat();seq.push([t,2]);t+=chat();seq.push([t,to]);}}
  return seq;
}
function applySw(sw,pos){if(sw.kind==='sa2'){sa2.hi.on=pos===0;sa2.lo.on=pos===1;}}
function runPlan(sw,plan,target){
  const tok=++sw.tok;sw.stable=target;
  for(const [dt,pos] of plan)schedule(dt,()=>{if(sw.tok===tok){sw.pos=pos;applySw(sw,pos);}});
}
const TG_T=[0.0002,0.0009],RL_T=[0.0003,0.001];
function moveTumbler(sw,to){const from=sw.stable;if(from===to)return;runPlan(sw,bouncePlan(from,to,P.tgBreak,P.tgMake,TG_T),to);}

/* ============ интерактивные органы ============ */
const tgl={};
function initToggles(){
  const left=[['SA1',78,241],['SA2',83,322],['SA3',81,400],['SA4',85,478],['SA5',88,553],['SA6',89,633]];
  left.forEach(([id,x,y])=>tgl[id]={id,x,y,dir:-1,up:false});
  [['I2',931],['I3',959],['I4',986],['I5',1014],['I6',1041],['I7',1069],['I8',1099]].forEach(([id,x])=>tgl[id]={id,x,y:245,dir:1,up:false,plc:true});
}
initToggles();
function setToggle(id,up){
  const t=tgl[id];if(!t||t.up===up)return;t.up=up;
  if(id==='SA1'){schedule(0.0003,()=>{sa1.up=up;});}
  else if(id==='SA2'){moveTumbler(sa2.sw,up?0:1);}
  else if(poles[id])poles[id].forEach(sw=>moveTumbler(sw,up?0:1));
  drawToggle(t);
}
function pressBtn(id,down){
  const sw=btn[id];const to=down?0:2;if(sw.stable===to)return;
  runPlan(sw,bouncePlan(sw.stable,to,down?P.tgBreak:P.tgBreak,P.tgMake,[0.0002,0.0006]),to);
  drawBtn(id,down);
}
const KN=[];
[['R',Rs,RV,['0,24','1','3,3'],'кОм',[[284,676],[285,743],[285,808]]],['C',Cs,CV,['0,47','1','3,3'],'мкФ',[[363,670],[365,742],[366,807]]]].forEach(([k,arr,vals,labs,unit,pos])=>{
  arr.forEach((e,i)=>KN.push({id:k+(i+1),e,vals,labs,unit,x:pos[i][0],y:pos[i][1]}));
});
function setKnob(id,idx){const k=KN.find(q=>q.id===id);if(!k)return;k.e.idx=((idx%3)+3)%3;k.e.val=k.vals[k.e.idx];drawKnob(k);}

/* ============ цифровая часть ============ */
function pinV(p){const n=jn[p.j];return n>=0?V[n]:n===-1?0:n===-2?vcc:(p.kind==='up'?vcc:0);}
function lv(p){const v=pinV(p);if(v>2.0)p.s=true;else if(v<0.8)p.s=false;return p.s;}
function setD(d,l){d.v=l?vcc:0;d.g=l?1/100:1/40;}
function digital(){
  for(const g of gates){let a=true,o=false;for(const p of g.ins){const s=lv(p);a=a&&s;o=o||s;}
    const out=g.type==='and'?a:g.type==='or'?o:!a;setD(g.out,out);}
  for(const f of dffs){const r=lv(f.R),s=lv(f.S),d=lv(f.D),c=lv(f.C);
    if(!r&&!s){setD(f.Q,true);setD(f.Qn,true);f.q=true;}
    else{ if(!s)f.q=true;else if(!r)f.q=false;else if(c&&!f.cp)f.q=d; setD(f.Q,f.q);setD(f.Qn,!f.q);}
    f.cp=c;}
  for(const c of cnts){const cn=lv(c.CN),r=lv(c.R);
    if(r)c.n=0;else if(cn&&!c.cp)c.n=(c.n+1)%10;c.cp=cn;
    for(const b of c.bits)setD(b.d,(c.n&({8:8,4:4,2:2,1:1}[b.w]))!==0);}
  for(const g of gens){const l=state.power&&(Math.floor((state.t-state.tPower)*g.f*2)%2===0);setD(g.d,l);}
  sa1.d.v=sa1.up?vcc:0;
  sa2.hi.v=vcc;sa2.lo.v=0;
  for(const r of relays){const s=lv(r.coil);
    if(s!==r.cmd){r.cmd=s;const tok=++r.tok;
      schedule(Math.max(1e-3,(s?P.relayOn:P.relayOff)*rnd(0.9,1.1)),()=>{if(r.tok!==tok)return;r.mech=s;
        r.sw.forEach(sw=>{const to=s?1:0;const sk=rnd(0,2e-4);schedule(sk,()=>runPlan(sw,bouncePlan(sw.stable,to,P.rlBreak,P.rlMake,RL_T),to));});});}}
}
function resetDigital(){
  evq.length=0;
  cnts.forEach(c=>{c.n=0;c.cp=false;});dffs.forEach(f=>{f.q=false;f.cp=true;});
  relays.forEach(r=>{r.cmd=false;r.mech=false;r.tok++;r.sw.forEach(sw=>{sw.pos=0;sw.stable=0;sw.tok++;});});
  Object.values(poles).flat().forEach(s=>s.tok++);
  // тумблеры сохраняют своё положение
  for(const id in poles)poles[id].forEach(sw=>{const up=tgl[id].up;sw.pos=sw.stable=up?0:1;});
  sa2.sw.pos=sa2.sw.stable=tgl.SA2.up?0:1;sa2.hi.on=sa2.sw.pos===0;sa2.lo.on=sa2.sw.pos===1;sa1.up=tgl.SA1.up;
  for(const id in btn){btn[id].pos=btn[id].stable=2;btn[id].tok++;}
  for(const k in leds)leds[k].g=0;
  V.fill(0);
}
function setPower(on){
  state.power=on;vcc=on?5:0;state.tPower=state.t;resetDigital();
  $('#pwr').setAttribute('aria-pressed',on);$('#pwr').textContent=on?'Питание включено':'Питание выключено';
  document.body.classList.toggle('on',on);
}

/* ============ осциллограф ============ */
const CAP=1<<19,buf=[new Float32Array(CAP),new Float32Array(CAP)];
const probe=[null,null];
const sc={tb:2e-3,mode:'auto',slope:'rise',st:'idle',trig:0,frozen:null,pick:-1,prev:0};
function jackVolt(j){const n=jn[j];return n>=0?V[n]:n===-1?0:n===-2?vcc:NaN;}
function sample(){
  const i=state.k%CAP;
  for(let c=0;c<2;c++){const p=probe[c];const v=p==null?0:jackVolt(p);buf[c][i]=isNaN(v)?0:v;}
  if(sc.mode==='single'&&sc.st==='armed'&&probe[0]!=null){
    const v=buf[0][i],th=2.0,pr=sc.prev;
    if((sc.slope==='rise'&&pr<th&&v>=th)||(sc.slope==='fall'&&pr>=th&&v<th)){sc.st='rec';sc.trig=state.k;}
    sc.prev=v;
  }else if(sc.st==='rec'){
    if((state.k-sc.trig)*DT>=0.8*sc.tb*10){sc.st='done';sc.frozen={k0:sc.trig-Math.round(0.2*sc.tb*10/DT)};}
  }else sc.prev=buf[0][i];
}
function ledUpdate(){
  const a=0.01;
  for(const k in leds){const l=leds[k];const v=pinV(l.pin);const tgt=clamp((v-1.7)/1.3,0,1);l.g+=(tgt-l.g)*a;}
}

/* ============ шаг ============ */
function tick(){
  state.t+=DT;state.k++;
  runEvents();digital();
  for(const c of comps)solveComp(c);
  sample();
  if((state.k&3)===0)ledUpdate();
}
function advance(sec){const n=Math.round(sec/DT);for(let i=0;i<n;i++)tick();}

/* ============ рисование ============ */
const svg=$('#stand');
const gLed=el('g',{},svg),gSeg=el('g',{},svg),gTg=el('g',{},svg),gKn=el('g',{},svg),gLv=el('g',{},svg),gProbe=el('g',{},svg),gW=el('g',{},svg),gJ=el('g',{},svg),gGhost=el('g',{},svg);
const LEDPOS={};
{ // подложки линз и свечение
  const lens=[['SA1',170,242,9,'#1d3b30','#37f08a'],['SA2',172,322,9,'#1d3b30','#37f08a'],['LSA3',202,425,9,'#1d3b30','#37f08a'],['LSA4',204,503,9,'#1d3b30','#37f08a'],['LSB1',207,715,9,'#1d3b30','#37f08a'],['LSB2',212,792,9,'#1d3b30','#37f08a']];
  for(let r=0;r<6;r++)for(let c=0;c<5;c++){const n=r*5+c+1;const col=n===8?['#4a1a1a','#ff4a3d']:n===18?['#4a4012','#ffd21f']:['#1d3b30','#37f08a'];
    lens.push(['X'+n,[679,712.5,745.5,779,812.5][c],[643,677,710.5,743.5,776.5,809][r],6.2,col[0],col[1]]);}
  lens.forEach(([id,x,y,r,base,hot])=>{
    el('circle',{cx:x,cy:y,r:r,fill:base},gLed);
    const g=el('circle',{cx:x,cy:y,r:r,fill:hot,opacity:0},gLed);
    const halo=el('circle',{cx:x,cy:y,r:r*2,fill:hot,opacity:0,filter:'url(#blur)'},gLed);
    LEDPOS[id]={g,halo};});
  // индикаторы входов/выходов ПЛК
  const plcI=[904,931,959,987,1014,1041,1069,1095.5],plcQ=[907,942,977,1011,1045,1080];
  plcI.forEach((x,i)=>{el('circle',{cx:x,cy:270,r:9,fill:'#1d3b30'},gLed);LEDPOS['I'+(i+1)]={g:el('circle',{cx:x,cy:270,r:9,fill:'#37f08a',opacity:0},gLed)};});
  plcQ.forEach((x,i)=>{el('circle',{cx:x,cy:527,r:9,fill:'#1d3b30'},gLed);});
}
const defs=el('defs',{},svg);{const f=el('filter',{id:'blur',x:'-100%',y:'-100%',width:'300%',height:'300%'},defs);el('feGaussianBlur',{stdDeviation:'3'},f);}
// реле: окошки
const relayGlow=relays.map(r=>el('rect',{x:283+1.2*(r.n-1),y:190+84*(r.n-1),width:12,height:15,fill:'#ffb020',opacity:0,filter:'url(#blur)'},gLed));
// семисегментные индикаторы
const SEG={0:'abcdef',1:'bc',2:'abdeg',3:'abcdg',4:'bcfg',5:'acdfg',6:'acdefg',7:'abc',8:'abcdefg',9:'abcdfg'};
const DIG=[{x:1065,y:626,w:22,h:31},{x:1062,y:696,w:22,h:30}];
const segEls=DIG.map(d=>{const t=3.4,x=d.x,y=d.y,w=d.w,h=d.h;const q={a:[x+t,y,w-2*t,t],b:[x+w-t,y+t*.8,t,h/2-t*1.3],c:[x+w-t,y+h/2+t*.5,t,h/2-t*1.3],d:[x+t,y+h-t,w-2*t,t],e:[x,y+h/2+t*.5,t,h/2-t*1.3],f:[x,y+t*.8,t,h/2-t*1.3],g:[x+t,y+h/2-t/2,w-2*t,t]};
  const o={};for(const k in q){o[k]=el('rect',{x:q[k][0],y:q[k][1],width:q[k][2],height:q[k][3],fill:'#ff3b2f',opacity:0,filter:'url(#glow1)'},gSeg);}return o;});
{const f=el('filter',{id:'glow1',x:'-50%',y:'-50%',width:'200%',height:'200%'},defs);el('feGaussianBlur',{stdDeviation:'0.7'},f);}
// тумблеры
function drawToggle(t){
  if(!t.g){t.g=el('g',{},gTg);t.l1=el('line',{stroke:'#555b61','stroke-width':8,'stroke-linecap':'round'},t.g);t.l2=el('line',{stroke:'#dfe2e5','stroke-width':4.6,'stroke-linecap':'round'},t.g);t.hl=el('line',{stroke:'#fff','stroke-width':1.4,'stroke-linecap':'round',opacity:.8},t.g);
    t.tag=el('text',{'font-size':9,'font-family':'Consolas,monospace',fill:'#1c2024',stroke:'#f4f5f4','stroke-width':2.4,'paint-order':'stroke','text-anchor':'middle'},t.g);}
  const tx=t.x+t.dir*21,ty=t.y+(t.up?-15:15);
  for(const l of[t.l1,t.l2]){l.setAttribute('x1',t.x);l.setAttribute('y1',t.y);l.setAttribute('x2',tx);l.setAttribute('y2',ty);}
  t.hl.setAttribute('x1',t.x+t.dir*3);t.hl.setAttribute('y1',t.y+(t.up?-2:2));t.hl.setAttribute('x2',tx-t.dir*2);t.hl.setAttribute('y2',ty+(t.up?2:-2));
  if(!t.plc){t.tag.setAttribute('x',t.x);t.tag.setAttribute('y',t.y+33);t.tag.textContent=t.up?'вверх':'вниз';t.tag.style.display='';}else t.tag.style.display='none';
  if(t.plc){const i=+t.id.slice(1);const g=LEDPOS['I'+i];if(g)g.g.setAttribute('opacity',t.up?1:0);}
}
const BTNPOS={SB1:[92,713],SB2:[95,790]};
const btnEl={};
for(const id in BTNPOS){btnEl[id]=el('circle',{cx:BTNPOS[id][0],cy:BTNPOS[id][1],r:11,fill:'#000',opacity:0},gTg);}
function drawBtn(id,down){btnEl[id].setAttribute('opacity',down?.38:0);}
Object.values(tgl).forEach(drawToggle);
// ручки RC
function drawKnob(k){
  if(!k.g){k.g=el('g',{},gKn);el('circle',{cx:k.x,cy:k.y,r:20,fill:'#0f1113',stroke:'#4b5157','stroke-width':2},k.g);
    k.ptr=el('line',{stroke:'#fff','stroke-width':2.6,'stroke-linecap':'round'},k.g);
    k.txt=el('text',{x:k.x,y:k.y+4,'font-size':10,'font-family':'Consolas,monospace',fill:'#e9edf0','text-anchor':'middle'},k.g);
    k.un=el('text',{x:k.x,y:k.y+14,'font-size':6.5,'font-family':'Arial,sans-serif',fill:'#aeb6bd','text-anchor':'middle'},k.g);
    k.ring=[0,1,2].map(i=>{const a=(-50+50*i)*Math.PI/180;return el('circle',{cx:k.x+Math.sin(a)*25,cy:k.y-Math.cos(a)*25,r:1.8,fill:'#222'},k.g);});}
  const a=(-50+50*k.e.idx)*Math.PI/180;
  k.ptr.setAttribute('x1',k.x+Math.sin(a)*9);k.ptr.setAttribute('y1',k.y-Math.cos(a)*9);k.ptr.setAttribute('x2',k.x+Math.sin(a)*19);k.ptr.setAttribute('y2',k.y-Math.cos(a)*19);
  k.txt.textContent=k.labs[k.e.idx];k.un.textContent=k.unit;
  k.ring.forEach((c,i)=>c.setAttribute('fill',i===k.e.idx?'#e7a100':'#22282d'));
}
KN.forEach(drawKnob);
// гнёзда (зоны попадания и индикация уровней)
const hit=JACKS.map(j=>{const c=el('circle',{cx:j.x,cy:j.y,r:9.5,fill:'transparent','data-j':j.i,class:'jh'},gJ);return c;});
let lvEls=[];
function redrawLevels(){
  gLv.innerHTML='';lvEls=[];
  if(!$('#showLv')||!$('#showLv').checked)return;
  for(let j=0;j<N;j++){if(jn[j]===-3)continue;const c=el('circle',{cx:JACKS[j].x,cy:JACKS[j].y,r:5.2,fill:'none','stroke-width':2.6,'pointer-events':'none'},gLv);lvEls.push([j,c]);}
}
function updLevels(){for(const [j,c] of lvEls){const v=jackVolt(j);c.setAttribute('stroke',isNaN(v)?'transparent':v>2.0?'#ff8a00':v<0.8?'#1f78ff':'#8a8f94');}}
// провода
const COLORS=['#d9382b','#2b6fe0','#e9aa00','#25a04a','#2b2f33','#f1f1ee','#8a4fd1'];
let wcolor='auto',cidx=0;
function wirePath(a,b){const A=JACKS[a],B=JACKS[b];const d=Math.hypot(A.x-B.x,A.y-B.y);const s=Math.min(70,14+d*0.22);return `M${A.x},${A.y} C${A.x},${A.y+s} ${B.x},${B.y+s} ${B.x},${B.y}`;}
function drawWires(){
  gW.innerHTML='';
  for(const w of wires){const g=el('g',{class:'wire','data-w':w.id},gW);const d=wirePath(w.a,w.b);
    el('path',{d,fill:'none',stroke:'rgba(0,0,0,.45)','stroke-width':6.4,'stroke-linecap':'round'},g);
    el('path',{d,fill:'none',stroke:w.color,'stroke-width':4.2,'stroke-linecap':'round'},g);
    el('path',{d,fill:'none',stroke:'rgba(255,255,255,.35)','stroke-width':1,'stroke-linecap':'round',transform:'translate(0,-1)'},g);
    el('path',{d,fill:'none',stroke:'transparent','stroke-width':12,'stroke-linecap':'round','data-w':w.id,class:'wh'},g);
    for(const j of[w.a,w.b]){el('circle',{cx:JACKS[j].x,cy:JACKS[j].y,r:5.6,fill:w.color,stroke:'rgba(0,0,0,.6)','stroke-width':1.4},g);el('circle',{cx:JACKS[j].x,cy:JACKS[j].y,r:1.8,fill:'rgba(0,0,0,.65)'},g);}}
  drawProbes();
}
function drawProbes(){
  gProbe.innerHTML='';
  probe.forEach((p,c)=>{if(p==null)return;const j=JACKS[p];const col=c?'#19b7d9':'#f0b400';
    el('circle',{cx:j.x,cy:j.y,r:12.5,fill:'none',stroke:col,'stroke-width':2.4,'stroke-dasharray':'3 2.5'},gProbe);
    el('text',{x:j.x+13,y:j.y-9,'font-size':10,'font-weight':700,'font-family':'Consolas,monospace',fill:col,stroke:'#111',

 'stroke-width':2.4,'paint-order':'stroke'},gProbe).textContent='CH'+(c+1);});
}
const hist=[];let redo=[];
function snap(){hist.push(JSON.stringify(wires.map(w=>[w.a,w.b,w.color])));if(hist.length>80)hist.shift();redo=[];}
function setWires(arr){wires=arr.map(([a,b,c])=>({id:wid++,a,b,color:c}));compile();drawWires();}
function addWire(a,b,color,nosnap){
  if(a===b)return;if(wires.some(w=>(w.a===a&&w.b===b)||(w.a===b&&w.b===a)))return;
  if(!nosnap)snap();
  let col=color||(wcolor==='auto'?COLORS[cidx++%COLORS.length]:wcolor);
  wires.push({id:wid++,a,b,color:col});compile();drawWires();
}
function delWire(id){snap();wires=wires.filter(w=>w.id!==id);compile();drawWires();}
function undo(){if(!hist.length)return;redo.push(JSON.stringify(wires.map(w=>[w.a,w.b,w.color])));setWires(JSON.parse(hist.pop()));}
function redoF(){if(!redo.length)return;hist.push(JSON.stringify(wires.map(w=>[w.a,w.b,w.color])));setWires(JSON.parse(redo.pop()));}
function clearAll(){if(!wires.length)return;snap();wires=[];compile();drawWires();}

/* ============ мышь ============ */
const tip=$('#tip');
function toSvg(e){const r=svg.getBoundingClientRect();return{x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height};}
function nearestJack(p,rad){let b=-1,bd=rad*rad;for(let i=0;i<N;i++){const dx=JACKS[i].x-p.x,dy=JACKS[i].y-p.y,d=dx*dx+dy*dy;if(d<bd){bd=d;b=i;}}return b;}
function nearestObj(p){
  for(const k of KN){if(Math.hypot(k.x-p.x,k.y-p.y)<22)return{t:'knob',o:k};}
  for(const id in tgl){const t=tgl[id];if(Math.hypot(t.x+t.dir*8-p.x,t.y-p.y)<22)return{t:'tg',o:t};}
  for(const id in BTNPOS){if(Math.hypot(BTNPOS[id][0]-p.x,BTNPOS[id][1]-p.y)<17)return{t:'btn',o:id};}
  return null;
}
let drag=null;
svg.addEventListener('pointerdown',e=>{
  const p=toSvg(e);const j=nearestJack(p,11);
  if(j>=0){
    if(e.shiftKey||e.altKey){probe[e.altKey?1:0]=j;drawProbes();e.preventDefault();return;}
    if(sc.pick>=0){probe[sc.pick]=j;sc.pick=-1;updatePickUI();drawProbes();return;}
    drag={from:j,pid:e.pointerId};svg.setPointerCapture(e.pointerId);ghost(p);e.preventDefault();return;}
  const o=nearestObj(p);
  if(o){e.preventDefault();
    if(o.t==='tg'){setToggle(o.o.id,!o.o.up);}
    else if(o.t==='knob'){setKnob(o.o.id,o.o.e.idx+(e.shiftKey?2:1));}
    else if(o.t==='btn'){pressBtn(o.o,true);btnDown=o.o;svg.setPointerCapture(e.pointerId);}
    return;}
  const w=e.target.getAttribute&&e.target.getAttribute('data-w');
  if(w){delWire(+w);}
});
let btnDown=null;
svg.addEventListener('pointermove',e=>{
  const p=toSvg(e);
  if(drag)ghost(p);
  showTip(e,p);
});
function endDrag(e){
  if(btnDown){pressBtn(btnDown,false);btnDown=null;}
  if(!drag)return;
  const p=toSvg(e);const j=nearestJack(p,13);
  if(j>=0&&j!==drag.from)addWire(drag.from,j);
  drag=null;gGhost.innerHTML='';
}
svg.addEventListener('pointerup',endDrag);
svg.addEventListener('pointercancel',endDrag);
svg.addEventListener('pointerleave',()=>{tip.hidden=true;});
svg.addEventListener('contextmenu',e=>{const p=toSvg(e);const o=nearestObj(p);if(o&&o.t==='knob'){e.preventDefault();setKnob(o.o.id,o.o.e.idx-1);}});
svg.addEventListener('wheel',e=>{const p=toSvg(e);const o=nearestObj(p);if(o&&o.t==='knob'){e.preventDefault();setKnob(o.o.id,o.o.e.idx+(e.deltaY>0?1:-1));}},{passive:false});
function ghost(p){gGhost.innerHTML='';const A=JACKS[drag.from];const j=nearestJack(p,13);const B=j>=0&&j!==drag.from?JACKS[j]:p;
  const d=Math.hypot(A.x-B.x,A.y-B.y),s=Math.min(70,14+d*.22);const path=`M${A.x},${A.y} C${A.x},${A.y+s} ${B.x},${B.y+s} ${B.x},${B.y}`;
  el('path',{d:path,fill:'none',stroke:'rgba(0,0,0,.4)','stroke-width':6.4,'stroke-linecap':'round'},gGhost);
  el('path',{d:path,fill:'none',stroke:wcolor==='auto'?COLORS[cidx%COLORS.length]:wcolor,'stroke-width':4.2,'stroke-linecap':'round',opacity:.9},gGhost);
  el('circle',{cx:A.x,cy:A.y,r:11,fill:'none',stroke:'#fff','stroke-width':2},gGhost);
  if(j>=0&&j!==drag.from)el('circle',{cx:B.x,cy:B.y,r:11,fill:'none',stroke:'#37f08a','stroke-width':2.4},gGhost);}
function fmtV(v){return isNaN(v)?'нет соединения':v.toFixed(2).replace('.',',')+' В'+(v>2.0?' · «1»':v<0.8?' · «0»':' · зона неопределённости');}
function showTip(e,p){
  if(drag){tip.hidden=true;return;}
  const j=nearestJack(p,11);let txt=null;
  if(j>=0){const v=jackVolt(j);txt=`<b>${JACKS[j].label}</b><br>${state.power||jn[j]===-1?fmtV(v):'питание выключено'}`;}
  else{const o=nearestObj(p);
    if(o&&o.t==='tg')txt=`<b>${o.o.id}</b> · ${o.o.up?'вверх':'вниз'}<br>клик — переключить`;
    else if(o&&o.t==='knob')txt=`<b>${o.o.id}</b> · ${o.o.labs[o.o.e.idx]} ${o.o.unit}<br>клик, колесо — сменить`;
    else if(o&&o.t==='btn')txt=`<b>${o.o}</b> · кнопка<br>держите нажатой`;
    else{const w=e.target.getAttribute&&e.target.getAttribute('data-w');if(w)txt='Клик — убрать провод';}}
  if(!txt){tip.hidden=true;return;}
  tip.innerHTML=txt;tip.hidden=false;
  const r=$('#stage').getBoundingClientRect();
  tip.style.left=Math.min(e.clientX-r.left+14,r.width-190)+'px';tip.style.top=(e.clientY-r.top+14)+'px';
}

/* ============ вывод состояния ============ */
function paint(){
  // светодиоды
  for(const id in leds){const L=LEDPOS[id];if(!L)continue;const g=leds[id].g;L.g.setAttribute('opacity',g.toFixed(2));if(L.halo)L.halo.setAttribute('opacity',(g*.55).toFixed(2));}
  // встроенные светодиоды SA1/SA2
  for(const [id,drv,sw] of[['SA1',sa1.d,null],['SA2',sa2.hi,null]]){const L=LEDPOS[id];const v=jackVolt(J(id));const lv_=isNaN(v)?((id==='SA1'?sa1.up:sa2.sw.pos===0)&&state.power?1:0):(v>2?1:0);
    L.g.setAttribute('opacity',state.power?lv_:0);L.halo.setAttribute('opacity',state.power?lv_*.5:0);}
  relays.forEach((r,i)=>relayGlow[i].setAttribute('opacity',r.mech&&state.power?.9:0));
  cnts.forEach((c,i)=>{const s=state.power?SEG[c.n]:'';for(const k in segEls[i])segEls[i][k].setAttribute('opacity',s.includes(k)?1:0);});
  updLevels();
}
function updatePickUI(){document.querySelectorAll('.pickBtn').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.ch===sc.pick));}

/* осциллограф: рисование */
const cv=$('#scope'),cx=cv.getContext('2d');
function css(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim();}
function drawScope(){
  const dpr=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;
  if(cv.width!==Math.round(w*dpr)||cv.height!==Math.round(h*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);}
  cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,w,h);
  const bg=css('--scope-bg'),grid=css('--scope-grid'),txt=css('--muted');
  cx.fillStyle=bg;cx.fillRect(0,0,w,h);
  const L=40,R=8,T=8,B=20;const pw=w-L-R,ph=h-T-B,lane=ph/2;
  const Tw=sc.tb*10;
  let k0;
  if(sc.mode==='single'&&sc.frozen)k0=sc.frozen.k0;else if(sc.mode==='single'&&sc.st==='rec')k0=sc.trig-Math.round(0.2*Tw/DT);else k0=state.k-Math.round(Tw/DT);
  cx.lineWidth=1;cx.font='10px Consolas, monospace';cx.fillStyle=txt;
  for(let l=0;l<2;l++){const y0=T+l*lane;
    for(let v=0;v<=5;v+=1){const y=y0+lane-6-(lane-12)*v/5.5;cx.strokeStyle=grid;cx.globalAlpha=v===0?.9:.45;cx.beginPath();cx.moveTo(L,y);cx.lineTo(L+pw,y);cx.stroke();cx.globalAlpha=1;if(v%5===0)cx.fillText(v+' В',4,y+3);}
  }
  for(let d=0;d<=10;d++){const x=L+pw*d/10;cx.strokeStyle=grid;cx.globalAlpha=.45;cx.beginPath();cx.moveTo(x,T);cx.lineTo(x,T+ph);cx.stroke();cx.globalAlpha=1;}
  const unit=sc.tb>=1e-3?(sc.tb*1e3)+' мс/дел':(sc.tb*1e6)+' мкс/дел';
  cx.fillStyle=txt;cx.fillText(unit,L,h-6);
  const cols=['#e3a700','#14a9cc'];
  for(let c=0;c<2;c++){
    if(probe[c]==null){cx.fillStyle=txt;cx.fillText('CH'+(c+1)+': щуп не назначен',L+8,T+c*lane+14);continue;}
    const y0=T+c*lane;cx.strokeStyle=cols[c];cx.lineWidth=1.6;cx.beginPath();
    const total=Math.round(Tw/DT);let first=true;
    const step=Math.max(1,Math.floor(total/(pw*2)));
    for(let i=0;i<=total;i+=step){const k=k0+i;if(k<0||k>state.k)continue;const v=buf[c][k%CAP];const x=L+pw*i/total,y=y0+lane-6-(lane-12)*clamp(v,-.3,5.8)/5.5;if(first){cx.moveTo(x,y);first=false;}else{cx.lineTo(x,y);}}
    cx.stroke();cx.lineWidth=1;cx.fillStyle=cols[c];cx.fillText('CH'+(c+1)+' · '+JACKS[probe[c]].label,L+8,T+c*lane+14);
  }
  if(sc.mode==='single'){cx.fillStyle=txt;cx.textAlign='right';cx.fillText(sc.st==='armed'?'ожидание фронта CH1…':sc.st==='rec'?'запись…':sc.st==='done'?'захвачено':'',w-R-4,T+14);cx.textAlign='left';}
}

/* ============ основной цикл ============ */
let last=performance.now(),acc=0;
function frame(now){
  const dt=Math.min(0.05,(now-last)/1000);last=now;
  acc+=dt*state.speed;
  const n=Math.floor(acc/DT);acc-=n*DT;
  const lim=Math.min(n,4000);for(let i=0;i<lim;i++)tick();
  paint();drawScope();
  $('#clock').textContent=(state.t*1000).toFixed(0).padStart(6,' ')+' мс';
  requestAnimationFrame(frame);
}

/* ============ примеры схем ============ */
const CASC=[['CT1.8','DD6.4.a'],['CT1.8','DD6.4.b'],['DD6.4.y','CT2.CN']];
const PRESETS=[
 {name:'ЛР1 · Дребезг тумблера SA2',hint:'Сбросьте счётчик: SA1 вверх, затем вниз. Переключайте SA2 вверх и вниз и записывайте показания. Верхний индикатор — единицы, нижний — десятки (каскад уже собран проводами). Счётчик считает только передний фронт.',
  w:[['SA2','CT1.CN'],['SA1','CT1.R'],['SA1','CT2.R'],...CASC]},
 {name:'ЛР1 · Тумблер SA1 со встроенной защитой',hint:'Сброс через SA3: вверх — сброс, вниз — счёт. SA1 переключается без лишних импульсов: счётчик покажет 1 после включения и не изменится при отключении.',
  w:[['SA1','CT1.CN'],['SA3.c','CT1.R'],['SA3.c','CT2.R'],['SA3.t','P2'],['SA3.b','GND2'],...CASC],tg:{SA3:false}},
 {name:'ЛР1 · Дребезг контактов реле K1',hint:'SA1 включает катушку K1. Контакты K1.1 и K1.2 подают +5 В через R1 на вход счёта. Сброс: SA2 вверх, затем вниз. R1 ограничивает ток через контакт.',
  w:[['SA1','K1.coil'],['P1','R1.in'],['R1.n','K1.1.c'],['R1.n','K1.2.c'],['K1.1.no','CT1.CN'],['K1.2.no','CT1.CN'],['SA2','CT1.R'],['SA2','CT2.R'],...CASC],kn:{R1:0}},
 {name:'ЛР2 · Антидребезг на RC-фильтре',hint:'SA1 включает K1. Контакт K1.1 замыкает узел R1–C1 на общий провод, элемент DD6.1 работает как инвертор, светодиод X1 и счётчик следят за его выходом. Меняйте R1 и C1 ручками и повторяйте опыт. Сброс счётчика: SA2 вверх, затем вниз.',
  w:[['SA1','K1.coil'],['P1','R1.in'],['C1.bot','GND2'],['K1.1.c','GND1'],['K1.1.no','R1.n'],['R1.n','DD6.1.a'],['R1.n','DD6.1.b'],['DD6.1.y','CT1.CN'],['DD6.1.y','X1'],['SA2','CT1.R'],['SA2','CT2.R'],...CASC],kn:{R1:0,C1:0}},
 {name:'ЛР2 · Антидребезг на триггере',hint:'Переключающий контакт SA3 соединён с входами S и R триггера DD3.1 через подтягивающие резисторы R1 и R2. Выход Q идёт на счётчик и светодиод X1. Переключайте SA3 вверх и вниз. Сброс: SA2 вверх, затем вниз.',
  w:[['SA3.c','GND1'],['SA3.t','DD3.1.S'],['SA3.b','DD3.1.R'],['SA3.t','R1.n'],['SA3.b','R2.n'],['R1.in','P1'],['R2.in','P2'],['DD3.1.Q','CT1.CN'],['DD3.1.Q','X1'],['SA2','CT1.R'],['SA2','CT2.R'],...CASC],kn:{R1:0,R2:0}},
 {name:'ЛР3 · Время включения реле',hint:'SA1 включает K1 и открывает элемент И-НЕ для импульсов генератора 1 кГц. Счёт останавливается, когда размыкается контакт K1.1. Время = число импульсов × 1 мс. Сброс: SA2 вверх, затем вниз; перед опытом SA1 вниз.',
  w:[['SA1','K1.coil'],['SA1','DD7.1.a'],['GEN1k','DD7.1.b'],['K1.1.c','P3'],['K1.1.nc','DD7.1.c'],['K1.1.nc','R1.in'],['R1.n','GND3'],['DD7.1.y','DD6.1.a'],['DD7.1.y','DD6.1.b'],['DD6.1.y','CT1.CN'],['SA2','CT1.R'],['SA2','CT2.R'],...CASC],kn:{R1:0}},
 {name:'ЛР4 · Задержка на цифровых элементах',hint:'SA1 разрешает счёт импульсов генератора 10 Гц. Когда бит «1» счётчика становится единицей, триггер DD3.1 включает светодиод X1. Задержку задаёт гнездо разряда, подключённое к C триггера: переключите провод на 2, 4, 8.',
  w:[['SA1','DD3.1.R'],['SA1','DD6.2.a'],['SA1','DD6.2.b'],['DD6.2.y','CT1.R'],['SA1','DD4.1.a'],['GEN10','DD4.1.b'],['DD4.1.y','DD4.2.a'],['DD3.1.Qn','DD4.2.b'],['DD4.2.y','CT1.CN'],['CT1.1','DD3.1.C'],['P1','DD3.1.D'],['DD3.1.Q','X1']]}
];
function loadPreset(i){
  const p=PRESETS[i];
  snap();
  for(const id in tgl)if(!tgl[id].plc&&tgl[id].up)setToggle(id,false);
  [1,2,3].forEach(n=>{setKnob('R'+n,0);setKnob('C'+n,0);});
  if(p.kn)for(const k in p.kn)setKnob(k,p.kn[k]);
  if(p.tg)for(const k in p.tg)setToggle(k,p.tg[k]);
  wires=[];cidx=0;
  p.w.forEach(([a,b])=>{wires.push({id:wid++,a:J(a),b:J(b),color:COLORS[cidx++%COLORS.length]});});
  compile();drawWires();
  $('#hint').textContent=p.hint;$('#hintBox').hidden=false;
  if(!state.power)setPower(true);
}

/* ============ интерфейс ============ */
function ui(){
  $('#pwr').addEventListener('click',()=>setPower(!state.power));
  $('#undo').addEventListener('click',undo);
  $('#redo').addEventListener('click',redoF);
  $('#clear').addEventListener('click',clearAll);
  $('#resetCnt').addEventListener('click',()=>{cnts.forEach(c=>c.n=0);});
  $('#speed').addEventListener('change',e=>{state.speed=+e.target.value;});
  $('#showLv').addEventListener('change',redrawLevels);
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redoF():undo();}});
  const pl=$('#presets');
  PRESETS.forEach((p,i)=>{const b=document.createElement('button');b.type='button';b.className='preset';b.textContent=p.name;b.addEventListener('click',()=>loadPreset(i));pl.appendChild(b);});
  const sw=$('#colors');
  ['auto',...COLORS].forEach(c=>{const b=document.createElement('button');b.type='button';b.className='swatch';b.setAttribute('aria-label','Цвет провода '+c);b.setAttribute('aria-pressed',c==='auto');
    if(c==='auto'){b.textContent='авто';b.classList.add('auto');}else b.style.setProperty('--c',c);
    b.addEventListener('click',()=>{wcolor=c;sw.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));});sw.appendChild(b);});
  // параметры
  const bind=(id,key,mul)=>{const i=$(id);i.value=(P[key]/mul).toString().replace('.',',');i.addEventListener('change',()=>{const v=parseFloat(i.value.replace(',','.'));if(isFinite(v)&&v>=0)P[key]=v*mul;});};
  bind('#pOn','relayOn',1e-3);bind('#pOff','relayOff',1e-3);bind('#pTb','tgBreak',1);bind('#pTm','tgMake',1);bind('#pRb','rlBreak',1);bind('#pRm','rlMake',1);
  // осциллограф
  document.querySelectorAll('.pickBtn').forEach(b=>b.addEventListener('click',()=>{const c=+b.dataset.ch;sc.pick=sc.pick===c?-1:c;updatePickUI();}));
  $('#clrProbe').addEventListener('click',()=>{probe[0]=probe[1]=null;drawProbes();});
  $('#tb').addEventListener('change',e=>{sc.tb=+e.target.value;});
  $('#smode').addEventListener('change',e=>{sc.mode=e.target.value;sc.frozen=null;sc.st=sc.mode==='single'?'armed':'idle';$('#arm').hidden=sc.mode!=='single';});
  $('#slope').addEventListener('change',e=>{sc.slope=e.target.value;});
  $('#arm').addEventListener('click',()=>{sc.frozen=null;sc.st='armed';});
  $('#scopeBox').addEventListener('toggle',()=>{});
}

/* ============ запуск ============ */
ui();compile();drawWires();
setPower(false);
window.__sim={state,P,J,JACKS,tgl,cnts,dffs,relays,gates,leds,probe,sc,buf,compile,addWire:(a,b)=>addWire(J(a),J(b),null,true),clear:()=>{wires=[];compile();drawWires();},
  setToggle,pressBtn,setKnob,setPower,advance,loadPreset,PRESETS,get V(){return V;},jackVolt:id=>jackVolt(J(id)),count:()=>cnts[1].n*10+cnts[0].n,reset:()=>{cnts.forEach(c=>c.n=0)},get wires(){return wires;}};
requestAnimationFrame(frame);
})();
