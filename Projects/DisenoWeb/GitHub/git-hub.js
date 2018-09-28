const search_input = $("input");

search_input.on("keydown", function(e){
	if(e.keyCode == 13){
		const username = $(this).val();
		const userUrl = "https://api.github.com/users/" + username;

		$.ajax({
			url: userUrl
		})
		.done(function(data){
			$("#profile_picture").attr("src", data.avatar_url);
			$("#name").text(data.name);
			$("#login").text(data.login);
			$("#followers").text(data.followers);
			$("#bio").text(data.bio);
			$("#following").text(data.following);

			$.ajax({
				url: data.repos_url
			})
			.done(function(json_data){
				let outhtml = "";
				$.each(json_data, function(index){
					outhtml = outhtml + "<span class='badge badge-primary'>"+json_data[index].name+"</span>";
					$(".repos").html("");
					$(".repos").html(outhtml);
				});
			});
			$(".card-hub").show();
		})
		.fail(function(data){
			$(".card-hub").hide();
		});
	}
});