function disp(code){

	if(13 === code){

		var str = document.js.txtb.value;
		
		var len = str.length

		if ((str.match(/検索/i)) || (str.match(/けんさく/i)) || (str.match(/調べて/i)) ||  (str.match(/しらべて/i)) || (str.match(/知ってる？/i)) || (str.match(/しってる？/i)) || (str.match(/知らない？/i)) || (str.match(/しらない？/i))) {
			var audio = new Audio("まかせて！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("まかせて！");
			}, 2500);
			setTimeout(function() {
			href=void(window.open('https://www.google.co.jp/#q=' + str, 'mywindow3', 'width=1000, height=500, menubar=no, toolbar=no, scrollbars=yes'));
			}, 4000);
		}		
		
		else if ((str.match(/キレイ/i)) || (str.match(/きれい/i)) || (str.match(/綺麗/i))) {
			var audio = new Audio("きれい.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("キレイ〜");
			}, 1500);
		}

		else if ((str.match(/うさみみ/i)) || (str.match(/うさ耳/i)) || (str.match(/ウサ耳/i)) || (str.match(/ウサミミ/i))) {
			var audio = new Audio("ウサ耳つけないの？.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("ウサ耳つけないの？");
			}, 1500);
		}

		else if (((str.match(/ティッピ/i)) && (str.match(/うさぎ/i))) || ((str.match(/ティッピ/i)) && (str.match(/ウサギ/i))) || ((str.match(/ティッピ/i)) && (str.match(/兎/i))) || ((str.match(/てぃっぴ/i)) && (str.match(/うさぎ/i))) || ((str.match(/てぃっぴ/i)) && (str.match(/ウサギ/i))) || ((str.match(/てぃっぴ/i)) && (str.match(/兎/i))) ){
			var audio = new Audio("うーん　でもティッピーうさぎっぽくないよもふもふだし.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("うーん　でもティッピーうさぎっぽくないよもふもふだし");
			}, 5500);
		}

		else if (str.match(/もじゃ/i)) {
			var audio = new Audio("・・・もじゃもじゃ.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("・・・もじゃもじゃ");
			}, 100);
		}

		else if ((str.match(/もふもふ喫茶/i)) || (str.match(/モフモフ喫茶/i)) || (str.match(/もふもふきっさ/i)) || (str.match(/モフモフきっさ/i))) {
			var audio = new Audio("ズバリもふもふ喫茶！！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("ズバリもふもふ喫茶！！");
			}, 3000);
		}

		else if (str.match(/ようこそ/i)) {
			var audio = new Audio("ここなら楽しく暮らせそう.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("ここなら楽しく暮らせそう");
			}, 2500);
		}

		else if (str.match(/絵/i)) {
			var audio = new Audio("絵なら任せて！これでも金賞もらったことあるんだ.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("絵なら任せて！これでも金賞もらったことあるんだ");
			}, 4000);
		}

		else if (str.match(/らしい/i)) {
			var audio = new Audio("へえーそうなんだ.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("へえーそうなんだ");
			}, 2000);
		}

		else if (str.match(/お姉/i) || (str.match(/おねえ/i))) {
			var rand = Math.floor( Math.random() * 2 ) ;
			switch(rand){
				case 0:
					var audio = new Audio("私を姉だと思って何でも言って.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("私を姉だと思って何でも言って");
					}, 2500);
				break;
				case 1:
					var audio = new Audio("もう一回言って.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("もう一回言って");
					}, 4000);
				break;
			}
		}
		
		else if ((str.match(/ヤッホー/i)) || (str.match(/やっほー/i)) || (str.match(/やあ/i)) || (str.match(/こんにちは/i)) || (str.match(/おはよう/i)) || (str.match(/こんばんは/i))) {
			var audio = new Audio("いらっしゃいませー♪.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("いらっしゃいませー♪");
			}, 1500);
		}
		
		else if ((str.match(/制服/i)) || (str.match(/せいふく/i))) {
			var audio = new Audio("わぁー　制服着れるんだね♪　せいふく♪せいふく♪.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("わぁー　制服着れるんだね♪　せいふく♪せいふく♪");
			}, 5500);
		}
		
		else if ((str.match(/信じ/i)) || (str.match(/しんじ/i))) {
			var audio = new Audio("説得力ないよ！？.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("説得力ないよ！？");
			}, 1700);
		}

		else if ((str.match(/よろしく/i)) || (str.match(/名前/i)) || (str.match(/なまえ/i))) {
			var audio = new Audio("私はココアだよよろしくね.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("私はココアだよよろしくね");
			}, 3000);
		}

		else if (str.match(/うさぎ/i) || (str.match(/ウサギ/i)) || (str.match(/兎/i))) {
			var audio = new Audio("うっさぎ～　うっさぎ～♪.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("うっさぎ〜　うっさぎ〜♪");
			}, 3000);
		}


		else if ((str.match(/キリマンジャロ/i)) || (str.match(/きりまんじゃろ/i))) {
					var audio = new Audio("この酸味・・・キリマンジャロだね.wav");
					audio.play();
					audio.currentTime = 0;
					var start = new Date().getTime();
					setTimeout(function() {
					window.alert("この酸味・・・キリマンジャロだね");
					}, 3000);
		}


		else if (str.match(/ブルーマウンテン/i) || (str.match(/ぶるーまうんてん/i))) {
					var audio = new Audio("この上品な香り！これがブルーマウンテンか！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("この上品な香り！これがブルーマウンテンか！");
					}, 4000);
		}


		else if ((str.match(/もふもふ/i)) || (str.match(/モフモフ/i))) {
			var rand = Math.floor( Math.random() * 2 ) ;
			switch(rand){
				case 0:
					var audio = new Audio("せめてモフモフさせて！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("せめてモフモフさせて！");
					}, 2500);
				break;
				case 1:
					var audio = new Audio("もふもふ気持ちいい～.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("もふもふ気持ちいい〜");
					}, 2500);
				break;
			}
		}

		else if ((str.match(/運命/i)) || (str.match(/うんめい/i))) {
			var audio = new Audio("すごい！これは偶然を通り越して運命だよ！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("すごい！これは偶然を通り越して運命だよ！");
			}, 6500);
		}
		
		else if ((str.match(/動/i)) || (str.match(/うご/i))) {
			var audio = new Audio("じゃあその銃は何！？.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("じゃあその銃は何！？");
			}, 1500);
		}

		else if ((str.match(/バイト/i)) ||  (str.match(/ばいと/i))) {
			var audio = new Audio("ほんとにバイトさんだったんだ・・・.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("ほんとにバイトさんだったんだ・・・");
			}, 2500);
		}


		else if ((str.match(/感触/i)) || (str.match(/かんしょく/i))) {
			var audio = new Audio("それにしてもこの感触癖になるなぁ.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("それにしてもこの感触癖になるなぁ");
			}, 4000);
		}

		else if ((str.match(/特技/i)) || (str.match(/とくぎ/i))) {
			var audio = new Audio("私も何か特技あったらなー.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("私も何か特技あったらなー");
			}, 2500);
		}

		else if ((str.match(/凄いだろ/i)) || (str.match(/すごいだろ/i)) || (str.match(/スゴいだろ/i)) || (str.match(/凄いでしょ/i)) || (str.match(/すごいでしょ/i)) || (str.match(/スゴいでしょ/i)) ) {
			var rand = Math.floor( Math.random() * 2 ) ;
			switch(rand){
			case 0:
				var audio = new Audio("いや…上手ってレベルじゃないよていうか人間業じゃないよ！.wav");
				audio.play();
				audio.currentTime = 0;
				setTimeout(function() {
				window.alert("いや…上手ってレベルじゃないよていうか人間業じゃないよ！");
				}, 6000);
			break;
			case 1:
				var audio = new Audio("上手いんだね！　ね　もう一個作って.wav");
				audio.play();
				audio.currentTime = 0;
				setTimeout(function() {
				window.alert("上手いんだね！　ね　もう一個作って");
				}, 3500);
			break;
			}
		}

		else if ((str.match(/凄/i)) || (str.match(/すご/i)) || (str.match(/スゴ/i)) || (str.match(/あげる/i)) || (str.match(/あげよ/i)) || (str.match(/やる/i))) {
			var audio = new Audio("ありがとう.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("ありがとう");
			}, 1000);
		}


		else if ((str.match(/なんて呼/i)) || (str.match(/なんてよ/i))) {
			var audio = new Audio("お姉ちゃんって呼んで.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("お姉ちゃんって呼んで");
			}, 1500);
		}
		
		
		else if (str.match(/おいしい/i)) {
			var audio = new Audio("うん！全部おいしい！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("うん！全部おいしい！");
			}, 2500);
		}

		else if ((str.match(/やってみよう/i)) || (str.match(/してみよう/i)) || (str.match(/やろう/i)) || (str.match(/しよう/i)) ) {
			var audio = new Audio("よーし私もやってみるよ！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("よーし私もやってみるよ！");
			}, 2000);
		}

		else if ((str.match(/ちがう/i)) || (str.match(/違う/i)) ) {
			var audio = new Audio("なんか難しい・・・イメージと違う.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("なんか難しい・・・イメージと違う");
			}, 4500);
		}

		else if ((str.match(/楽しみ/i)) || (str.match(/たのしみ/i)) ) {
			var audio = new Audio("どんなのができるか楽しみだね.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("どんなのができるか楽しみだね");
			}, 2500);
		}

		else if ((str.match(/おつかれ/i)) || (str.match(/お疲れ/i)) || (str.match(/オツカレ/i)) ) {
			var audio = new Audio("おつかれさまー♪.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("おつかれさまー♪");
			}, 2000);
		}
		
		else if ((str.match(/だれ/i)) || (str.match(/誰/i))) {
		var rand = Math.floor( Math.random() * 2 ) ;
			switch(rand){
				case 0:
					var audio = new Audio("誰もいないはずなのに　誰かに見られているような.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("誰もいないはずなのに　誰かに見られているような");
					}, 4200);
				break;
				case 1:
					var audio = new Audio("強盗が！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("強盗が！");
					}, 100);
				break;
			}
		}

		else if (str.match(/コーヒ/i) || (str.match(/珈琲/i))) {
		var rand = Math.floor( Math.random() * 3 ) ;
			switch(rand){
				case 0:
					var audio = new Audio("この酸味・・・キリマンジャロだね.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("この酸味・・・キリマンジャロだね");
					}, 2800);
				break;
				case 1:
					var audio = new Audio("この上品な香り！これがブルーマウンテンか！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("この上品な香り！これがブルーマウンテンか！");
					}, 3600);
				break;
				case 2:
					var audio = new Audio("安心する味！これインスタントの・・・.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("安心する味！これインスタントの・・・");
					}, 3500);
				break;
			}
		}

		else if ((str.match(/やって/i)) || (str.match(/して/i)) || (str.match(/働/i)) || (str.match(/はたら/i))) {
			var rand = Math.floor( Math.random() * 3 ) ;
				switch(rand){
					case 0:
						var audio = new Audio("お、重い、これは普通の女の子にはキツイよ.wav");
						audio.play();
						audio.currentTime = 0;
						setTimeout(function() {
						window.alert("お、重い、これは普通の女の子にはキツイよ");
						}, 3700);
					break;
					case 1:
						var audio = new Audio("はい、今日から働かせて頂くココアといいます.wav");
						audio.play();
						audio.currentTime = 0;
						setTimeout(function() {
						window.alert("はい、今日から働かせて頂くココアといいます");
						}, 3500);
					break;
					case 2:
						var audio = new Audio("やったー！私ちゃんと注文取れたよ！.wav");
						audio.play();
						audio.currentTime = 0;
						setTimeout(function() {
						window.alert("やったー！私ちゃんと注文取れたよ！");
						}, 3500);
					break;
				}
		}

		else if (str.match(/どう/i)) {
			var rand = Math.floor( Math.random() * 7 ) ;
			switch(rand){
				case 0:
					var audio = new Audio("すごいっ.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("すごいっ");
					}, 1500);
				break;
				case 1:
					var audio = new Audio("なんか今日一番安心した！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("なんか今日一番安心した！");
					}, 4000);
				break;
				case 2:
					var audio = new Audio("私より大人っぽい.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("私より大人っぽい");
					}, 2500);
				break;
				case 3:
					var audio = new Audio("何もってるの？.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("何もってるの？");
					}, 1500);
				break;
				case 4:
					var audio = new Audio("わっ！すごい上手い！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("わっ！すごい上手い！");
					}, 2000);
				break;
				case 5:
					var audio = new Audio("すごいよ！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("すごいよ！");
					}, 1500);
				break;
				case 6:
					var audio = new Audio("うわ～上手い！.wav");
					audio.play();
					audio.currentTime = 0;
					setTimeout(function() {
					window.alert("うわ～上手い！");
					}, 1500);
				break;
			}
		}
		
		
		else if (len >= 20) {
			var audio = new Audio("落ち着いてサー！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
			window.alert("落ち着いてサー！");
			}, 2500);
		}

		else if ( str.indexOf('+') != -1) {
			var audio = new Audio("まかせて！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
				str = str.replace(/[^0-9,+]+/g,"");
				var number = str.split("+");
				number[0] = parseInt(number[0]);
				number[1] = parseInt(number[1]);
				alert(number[0] + number[1] + "だよ");
			}, 2500);

		}

		else if ( str.indexOf('-') != -1) {
			var audio = new Audio("まかせて！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
				str = str.replace(/[^0-9,-]+/g,"");
				var number = str.split("-");
				number[0] = parseInt(number[0]);
				number[1] = parseInt(number[1]);
				alert(number[0] - number[1] + "だよ");
			}, 2500);
		}

		else if ( str.indexOf('*') != -1) {
			var audio = new Audio("まかせて！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
				str = str.replace(/[^0-9,*]+/g,"");
				var number = str.split("*");
				number[0] = parseInt(number[0]);
				number[1] = parseInt(number[1]);
				alert(number[0] * number[1] + "だよ");
			}, 2500);
		}

		else if ( str.indexOf('/') != -1) {
			var audio = new Audio("まかせて！.wav");
			audio.play();
			audio.currentTime = 0;
			setTimeout(function() {
				str = str.replace(/[^0-9,/]+/g,"");
				var number = str.split("/");
				number[0] = parseInt(number[0]);
				number[1] = parseInt(number[1]);
				alert(number[0] / number[1] + "だよ");
			}, 2500);
		}


		else if(str != "" && str != null){
			var rand = Math.floor( Math.random() * 2 ) ;
				switch(rand){
					case 0:
						var audio = new Audio("うん.wav");
						audio.play();
						audio.currentTime = 0;
						setTimeout(function() {
						window.alert("うん");
						}, 100);
						break;
					case 1:
						 audio = new Audio("うん２.wav");
						audio.play();
						audio.currentTime = 0;
						setTimeout(function() {
						window.alert("うん");
						}, 100);
					break;
			}
			
		}
		document.js.txtb.value="";
	}
	
}
