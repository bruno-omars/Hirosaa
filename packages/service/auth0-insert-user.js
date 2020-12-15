function insertUser(user, context, callback) {
  const userId = user.user_id;
  const nickname = user.nickname;
  const email = user.email;
  const avatar = user.picture;
  //  const domain = email.match(/@.*/);
  const admin_secret = "dvakve53oeo2q";
  const url = "https://hirosaa-staging.hasura.app/v1/graphql";

  //  console.log(domain);
  //  const searchQuery = `
  //	query($domain: String!) {
  //		organizations(where: {id: {_eq: $domain}}) {
  //			id
  //			name
  //		}
  //	}`;
  //  const insertQuery = `
  //	mutation ($domain: String!) {
  //  	insert_organizations(objects: {id: $domain, name: ""}) {
  //    	affected_rows
  //      returning {
  //        id
  //      }
  //  	}
  //	}
  //	`;
  const query1 = `mutation(
					$userId: String!, 
					$nickname: String, 
					$email: String, 
					$avatar: String
				) {
          insert_users(objects: [{
            id: $userId, name: $nickname, email:$email, avatar:$avatar
          }], 
          on_conflict: {
            constraint: user_pkey,
            update_columns: [last_seen, name]
          }) { 
            affected_rows
          }
        }`;

  //  const searchVariables = {"domain": domain[0]};

  // Organizationが存在しているか
  //  request.post({
  //      url: url,
  //      headers: {
  //        'content-type' : 'application/json',
  //        'x-hasura-admin-secret': admin_secret
  //      },
  //      body: JSON.stringify({
  //        query: searchQuery,
  //        variables: searchVariables
  //      })
  //  }, function(error, response, body) {
  //    const obj = JSON.parse(body);
  //    const org = obj.data.organizations;
  //  	console.log(org);
  //    if (!org.length) {
  //      // Organizationが存在していない場合挿入
  //      request.post({
  //      url: url,
  //      headers: {
  //        'content-type' : 'application/json',
  //        'x-hasura-admin-secret': admin_secret
  //      },
  //        body: JSON.stringify({
  //          query: insertQuery,
  //          variables: searchVariables
  //        })
  //  		}, function(error, response, body) {
  //        const obj2 = JSON.parse(body);
  //        console.log(obj2.data.insert_organizations.returning[0].id);
  const variables1 = {
    userId: userId,
    nickname: nickname,
    email: email,
    avatar: avatar,
  };
  request.post(
    {
      url: url,
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": admin_secret,
      },
      body: JSON.stringify({
        query: query1,
        variables: variables1,
      }),
    },
    function (error, response, body) {
      console.log(body);
      callback(null, user, context);
    }
  );
  //      });
  //    } else {
  //      // Organizationが存在している場合ユーザ挿入
  //			const variables1 = {
  //        "userId": userId,
  //        "nickname": nickname,
  //        "email": email,
  //        "avatar": avatar,
  //        "organizationId": domain[0]
  //      };
  //      request.post({
  //          url: url,
  //          headers: {
  //            'content-type' : 'application/json',
  //            'x-hasura-admin-secret': admin_secret
  //          },
  //          body: JSON.stringify({
  //            query: query1,
  //            variables: variables1
  //          })
  //      }, function(error, response, body){
  //           console.log(body);
  //           callback(null, user, context);
  //      });
  //    }
  //  });
}
