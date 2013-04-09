$(document).ready(function(){
  $('#submit').bind('click',function(e){
			e.preventDefault();
			$('#response').html('');
			var zipcode='zipcode='+$('#zipcode').val();
			$.ajax({
				dataType:'json',
				url:'getReps.php',
				data:zipcode,
				type:'post',
				success:function(response){
					var resp=JSON.parse(response);
					var names=new Array;
					var lastname=new Array;
					$.each(resp.results, function(key, value) {
  						names.push(resp.results[key].name.split(' '));
						lastname.push(names[key][1]);
						$.ajax({
							dataType:'json',
							url:'getReps.php',
							data:{lastname:lastname,key:key},
							type:'post',
							success:function(response){
								var resp=JSON.parse(response);
								$.each(resp.response.legislators, function(key,value){
									var twitter=resp.response.legislators[key].legislator.twitter_id;
									if(twitter==null||twitter==''){
										$('#response').append('<img src="../img/fail-whale.png" alt="failwhale" />');
									}else{
										$('#response').append('<a href="http://twitter.com/#!/'+twitter+'">'+twitter+'</a><br/>');
									}
								})
							}
						})
					});
				}
			})
			
	})

})
