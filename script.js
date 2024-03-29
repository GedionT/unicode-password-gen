/*---- Unicode Blocks ----*/

const unicodeBlocks = [
        '\u0021','\u0022','\u0023','\u0024',
        '\u0025','\u0026','\u0027','\u0028',
        '\u0029','\u002A','\u002B','\u002C',
        '\u002D','\u002E','\u002F','\u0030',
        '\u0031','\u0032','\u0033','\u0034',
        '\u0035','\u0036','\u0037','\u0038',
        '\u0039','\u003A','\u003B','\u003C',
        '\u003D','\u003E','\u003F','\u0040',
        '\u0041','\u0042','\u0043','\u0044',
        '\u0045','\u0046','\u0047','\u0048',
        '\u0049','\u004A','\u004B','\u004C',
        '\u004D','\u004E','\u004F','\u0050',
        '\u0051','\u0052','\u0053','\u0054',
        '\u0055','\u0056','\u0057','\u0058',
        '\u0059','\u005A','\u005B','\u005C',
        '\u005D','\u005E','\u005F','\u0060',
        '\u0061','\u0062','\u0063','\u0064',
        '\u0065','\u0066','\u0067','\u0068',
        '\u0069','\u006A','\u006B','\u006C',
        '\u006D','\u006E','\u006F','\u0070',
        '\u0071','\u0072','\u0073','\u0074',
        '\u0075','\u0076','\u0077','\u0078',
        '\u0079','\u007A','\u007B','\u007C',
        '\u007D','\u007E','\u00A1','\u00A2',
        '\u00A5','\u00A6','\u00A7','\u00A8',
        '\u00A9','\u00AA','\u00AB','\u00AC',
        '\u00AD','\u00AE','\u00AF','\u00B0',
        '\u00B1','\u00B2','\u00B3','\u00B4',
        '\u00B5','\u00B6','\u00B7','\u00B8',
        '\u00B9','\u00BA','\u00BB','\u00BC',
        '\u00BD','\u00BE','\u00BF','\u00C0',
        '\u00C1','\u00C2','\u00C3','\u00C4',
        '\u00C5','\u00C6','\u00C7','\u00C8',
        '\u00C9','\u00CA','\u00CB','\u00CC',
        '\u00CD','\u00CE','\u00CF','\u00D0',
        '\u00D1','\u00D2','\u00D3','\u00D4',
        '\u00D5','\u00D6','\u00D7','\u00D8',
        '\u00D9','\u00DA','\u00DB','\u00DC',
        '\u00DD','\u00DE','\u00DF','\u00E0',
        '\u00E1','\u00E2','\u00E3','\u00E4',
        '\u00E5','\u00E6','\u00E7','\u00E8',
        '\u00E9','\u00EA','\u00EB','\u00EC',
        '\u00ED','\u00EE','\u00EF','\u00F0',
        '\u00F1','\u00F2','\u00F3','\u00F4',
        '\u00F5','\u00F6','\u00F7','\u00F8',
        '\u00F9','\u00FA','\u00FB','\u00FC',
        '\u00FD','\u00FE','\u00FF','\u0100',
        '\u0101','\u0102','\u0103',
        '\u0104','\u0105','\u0106','\u0107',
        '\u0108','\u0109','\u010A','\u010B',
        '\u010C','\u010D','\u010E','\u010F',
        '\u0110','\u0111','\u0112','\u0113',
        '\u0114','\u0115','\u0116','\u0117',
        '\u0118','\u0119','\u011A','\u011B',
        '\u011C','\u011D','\u011E','\u011F',
        '\u0120','\u0121','\u0122','\u0123',
        '\u0124','\u0125','\u0126','\u0127',
        '\u0128','\u0129','\u012A','\u012B',
        '\u012C','\u012D','\u012E','\u012F',
        '\u0130','\u0131','\u0132','\u0133',
        '\u0134','\u0135','\u0136','\u0137',
        '\u0138','\u0139','\u013A','\u013B',
        '\u013C','\u013D','\u013E','\u013F',
        '\u0140','\u0141','\u0142','\u0143',
        '\u0144','\u0145','\u0146','\u0147',
        '\u0148','\u0149','\u014A','\u014B',
        '\u014C','\u014D','\u014E','\u014F',
        '\u0150','\u0151','\u0152','\u0153',
        '\u0154','\u0155','\u0156','\u0157',
        '\u0158','\u0159','\u015A','\u015B',
        '\u015C','\u015D','\u015E','\u015F',
        '\u0160','\u0161','\u0162','\u0163',
        '\u0164','\u0165','\u0166','\u0167',
        '\u0168','\u0169','\u016A','\u016B',
        '\u016C','\u016D','\u016E','\u016F',
        '\u0170','\u0171','\u0172','\u0173',
        '\u0174','\u0175','\u0176','\u0177',
        '\u0178','\u0179','\u017A','\u017B',
        '\u017C','\u017D','\u017E','\u017F',
        '\u0180','\u0181','\u0182','\u0183',
        '\u0184','\u0185','\u0186','\u0187',
        '\u0188','\u0189','\u018A','\u018B',
        '\u018C','\u018D','\u018E','\u018F',
        '\u0190','\u0191','\u0192','\u0193',
        '\u0194','\u0195','\u0196','\u0197',
        '\u0198','\u0199','\u019A','\u019B',
        '\u019C','\u019D','\u019E','\u019F',
        '\u01A0','\u01A1','\u01A2','\u01A3',
        '\u01A4','\u01A5','\u01A6','\u01A7',
        '\u01A8','\u01A9','\u01AA','\u01AB',
        '\u01AC','\u01AD','\u01AE','\u01AF',
        '\u01B0','\u01B1','\u01B2','\u01B3',
        '\u01B4','\u01B5','\u01B6','\u01B7',
        '\u01B8','\u01B9','\u01BA','\u01BB',
        '\u01BC','\u01BD','\u01BE','\u01BF',
        '\u01C0','\u01C1','\u01C2','\u01C3',
        '\u01C4','\u01C5','\u01C6','\u01C7',
        '\u01C8','\u01C9','\u01CA','\u01CB',
        '\u01CC','\u01CD','\u01CE','\u01CF',
        '\u01D0','\u01D1','\u01D2','\u01D3',
        '\u01D4','\u01D5','\u01D6','\u01D7',
        '\u01D8','\u01D9','\u01DA','\u01DB',
        '\u01DC','\u01DD','\u01DE','\u01DF',
        '\u01E0','\u01E1','\u01E2','\u01E3',
        '\u01E4','\u01E5','\u01E6','\u01E7',
        '\u01E8','\u01E9','\u01EA','\u01EB',
        '\u01EC','\u01ED','\u01EE','\u01EF',
        '\u01F0','\u01F1','\u01F2','\u01F3',
        '\u01F4','\u01F5','\u01F6','\u01F7',
        '\u01F8','\u01F9','\u01FA','\u01FB',
        '\u01FC','\u01FD','\u01FE','\u01FF',
        '\u0200','\u0201','\u0202','\u0203',
        '\u0204','\u0205','\u0206','\u0207',
        '\u0208','\u0209','\u020A','\u020B',
        '\u020C','\u020D','\u020E','\u020F',
        '\u0210','\u0211','\u0212','\u0213',
        '\u0214','\u0215','\u0216','\u0217',
        '\u0218','\u0219','\u021A','\u021B',
        '\u021C','\u021D','\u021E','\u021F',
        '\u0220','\u0221','\u0222','\u0223',
        '\u0224','\u0225','\u0226','\u0227',
        '\u0228','\u0229','\u022A','\u022B',
        '\u022C','\u022D','\u022E','\u022F',
        '\u0230','\u0231','\u0232','\u0233',
        '\u0234','\u0235','\u0236','\u0237',
        '\u0238','\u0239','\u023A','\u023B',
        '\u023C','\u023D','\u023E','\u023F',
        '\u0240','\u0241','\u0242','\u0243',
        '\u0244','\u0245','\u0246','\u0247',
        '\u0248','\u0249','\u024A','\u024B',
        '\u024C','\u024D','\u024E','\u024F',
        '\u2600','\u2601','\u2602','\u2603',
        '\u2604','\u2605','\u2606','\u2607',
        '\u2608','\u2609','\u260A','\u260B',
        '\u260C','\u260D','\u260E','\u260F',
        '\u2610','\u2611','\u2612','\u2613',
        '\u2614','\u2615','\u2616','\u2617',
        '\u2618','\u2619','\u261A','\u261B',
        '\u261C','\u261D','\u261E','\u261F',
        '\u2620','\u2621','\u2622','\u2623',
        '\u2624','\u2625','\u2626','\u2627',
        '\u2628','\u2629','\u262A','\u262B',
        '\u262C','\u262D','\u262E','\u262F',
        '\u2630','\u2631','\u2632','\u2633',
        '\u2634','\u2635','\u2636','\u2637',
        '\u2638','\u2639','\u263A','\u263B',
        '\u263C','\u263D','\u263E','\u263F',
        '\u2640','\u2641','\u2642','\u2643',
        '\u2644','\u2645','\u2646','\u2647',
        '\u2648','\u2649','\u264A','\u264B',
        '\u264C','\u264D','\u264E','\u264F',
        '\u2650','\u2651','\u2652','\u2653',
        '\u2654','\u2655','\u2656','\u2657',
        '\u2658','\u2659','\u265A','\u265B',
        '\u265C','\u265D','\u265E','\u265F',
        '\u2660','\u2661','\u2662','\u2663',
        '\u2664','\u2665','\u2666','\u2667',
        '\u2668','\u2669','\u266A','\u266B',
        '\u266C','\u266D','\u266E','\u266F',
        '\u2670','\u2671','\u2672','\u2673',
        '\u2674','\u2675','\u2676','\u2677',
        '\u2678','\u2679','\u267A','\u267B',
        '\u267C','\u267D','\u267E','\u267F',
        '\u2680','\u2681','\u2682','\u2683',
        '\u2684','\u2685','\u2686','\u2687',
        '\u2688','\u2689','\u268A','\u268B',
        '\u268C','\u268D','\u268E','\u268F',
        '\u2690','\u2691','\u2692','\u2693',
        '\u2694','\u2695','\u2696','\u2697',
        '\u2698','\u2699','\u00A3','\u00A4',
        '\uD83D\uDE00','\uD83D\uDE01','\uD83D\uDE02','\uD83D\uDE03',
        '\uD83D\uDE04','\uD83D\uDE05','\uD83D\uDE06','\uD83D\uDE07',
        '\uD83D\uDE08','\uD83D\uDE09','\uD83D\uDE0A','\uD83D\uDE0B',
        '\uD83D\uDE0C','\uD83D\uDE0D','\uD83D\uDE0E','\uD83D\uDE0F',
        '\uD83D\uDE10','\uD83D\uDE11','\uD83D\uDE12','\uD83D\uDE13',
        '\uD83D\uDE14','\uD83D\uDE15','\uD83D\uDE16','\uD83D\uDE17',
        '\uD83D\uDE18','\uD83D\uDE19','\uD83D\uDE1A','\uD83D\uDE1B',
        '\uD83D\uDE1C','\uD83D\uDE1D','\uD83D\uDE1E','\uD83D\uDE1F',
        '\uD83D\uDE20','\uD83D\uDE21','\uD83D\uDE22','\uD83D\uDE23',
        '\uD83D\uDE24','\uD83D\uDE25','\uD83D\uDE26','\uD83D\uDE27',
        '\uD83D\uDE28','\uD83D\uDE29','\uD83D\uDE2A','\uD83D\uDE2B',
        '\uD83D\uDE2C','\uD83D\uDE2D','\uD83D\uDE2E','\uD83D\uDE2F',
        '\uD83D\uDE30','\uD83D\uDE31','\uD83D\uDE32','\uD83D\uDE33',
        '\uD83D\uDE34','\uD83D\uDE35','\uD83D\uDE36','\uD83D\uDE37',
        '\uD83D\uDE38','\uD83D\uDE39','\uD83D\uDE3A','\uD83D\uDE3B',
        '\uD83D\uDE3C','\uD83D\uDE3D','\uD83D\uDE3E','\uD83D\uDE3F',
        '\uD83D\uDE40','\uD83D\uDE41','\uD83D\uDE42','\uD83D\uDE43',
        '\uD83D\uDE44','\uD83D\uDE45','\uD83D\uDE46','\uD83D\uDE47',
        '\uD83D\uDE48','\uD83D\uDE49','\uD83D\uDE4A','\uD83D\uDE4B',
        '\uD83D\uDE4C','\uD83D\uDE4D','\uD83D\uDE4E','\uD83D\uDE4F'];

/*---- Setting Global Variables ----*/

var firstName;
var lastName;
var email;
var address;
var emojii;
var pin;
var passwordLength = 8;

function start(){
	
/*---- IIE to fetch the entered values to a variable upon submit----*/

	(function (){
		firstName 	=	 document.getElementById("userFirstName").value;
		lastName 	= 	 document.getElementById("userLastName").value;
		email 		= 	 document.getElementById("getEmail").value;
		address 	= 	 document.getElementById("getAddress").value;
		emojii 		= 	 document.getElementById("getEmojii").value;
		pin 		= 	 document.getElementById("getPin").value;
	})();

/*---- create appendable random unicode value ----*/

var unicode = 0;
let unicodeCreator 	= () => { 

    var random 	    = 		Math.floor(Math.random() * 750);
	unicode 		    = 		unicodeBlocks[random];
}

unicodeCreator();

/*---- Add all values to an array (if not empty) by converting to individual characters -----*/

var stash = [];
 	function stashInputs(obj){
 		if(obj != "") {
 		 obj = obj.split('');

            for(var i=0; i < obj.length ; i++){ // splits and adds individual character to array step-by-step
 		         stash.push(obj[i]);
        }

 	}
 	}

stashInputs(firstName);
stashInputs(lastName);
stashInputs(email);
stashInputs(address);
stashInputs(emojii);
stashInputs(pin);
stashInputs(unicode);

// console.log(stash); // to log the list of all stored characters on the array

/*---- Fisher-Yates Array Shuffling Algorithm ----*/

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(stash);

/*---- Creating the final key and printing it ----*/

let keygen = () => {

var key="";

	for(var i = 0; i < passwordLength ; i++)
	{
		key += stash[i];
	}
    
	document.getElementById("holder").value = key; 

}

keygen();


}