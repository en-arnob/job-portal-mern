module.exports = (values) => {
  const {
    // Profile-Information
    fullname,
    username,
    email,
    phone,
    portfolioLink,
    github,
    linkedin,
    twitter,
    facebook,
    instagram,

    // userImage
    profileImage,
    // Education Information
    institute,

    // certification
    certification,

    // Experience Information
    experience,
    designation,

    // Extra Information
    skills,
    expertise,
    skill3,
    skill4,
    skill5,
    skill6,
    language,
    interest2,
    interest3,
    interest4,
    interest5,
    interest6,
  } = values;

  let htmlTemplate = `
  <!DOCTYPE html>
    <html>
    <head>
    <title>${fullname}-Resume</title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
	* {
		box-sizing: border-box;
		transition: 0.35s ease;
		font-style: normal;
	  }
	  .rela-block {
		width: 100%;
		display: block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .rela-inline {
		display: inline-block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .floated {
		display: inline-block;
		position: relative;
		margin: false;
		top: ;
		left: ;
		right: ;
		bottom: ;
		float: left;
	  }
	  .abs-center {
		display: false;
		position: absolute;
		margin: false;
		top: 50%;
		left: 50%;
		right: false;
		bottom: false;
		-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
		text-align: center;
		width: 88%;
		font-style: normal;
	  }
	  body {
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 0px;
		font-weight: 400;
		line-height: 28px;
		background-size: cover;
		font-style: normal;
	  }
	  
	  .caps {
		text-transform: uppercase;
	  }
	  .justified {
		text-align: justify;
	  }
	  p.light {
		color: #777;
		font-size: 14px;
		font-style: normal;
	  }
	  h2 {
		font-family: 'Roboto Slab', serif;
		font-size: 30px;
		letter-spacing: 5px;
		font-weight: 600;
		line-height: 40px;
		color: #000;
		font-style: normal;
	  }
	  h3 {
		font-family: 'Roboto Slab', serif;
		font-size: 21px;
		letter-spacing: 1px;
		font-weight: 600;
		line-height: 28px;
		color: #000;
	  }
	  .page {
		width: 90%;
		max-width: 1200px;
		margin: 80px auto;
		background-color: #fff;
		box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);
	  }
	  .top-bar {
		height: 220px;
		background-color: #848484;
		color: #fff;
	  }
	  .name {
		display: false;
		position: absolute;
		margin: false;
		top: false;
		left: calc(350px + 5%);
		right: 0;
		bottom: 0;
		height: 120px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-size: 30px;
		letter-spacing: 8px;
		font-weight: 100;
		line-height: 60px;
		font-style: normal;
	  }
	  .name div {
		width: 94%;
	  }
	  .side-bar {
		display: false;
		position: absolute;
		margin: false;
		top: 60px;
		left: 2%;
		right: false;
		bottom: 0;
		width: 380px;
		background-color: #f7e0c1;
		padding: 320px 30px 50px;
	  }
	  .mugshot {
		display: false;
		position: absolute;
		margin: false;
		top: 50px;
		left: 70px;
		right: false;
		bottom: false;
		height: 210px;
		width: 210px;
	  }
	  .mugshot .logo {
		margin: -23px;
	  }
	  .logo {
		display: false;
		position: absolute;
		margin: false;
		top: 0;
		left: 0;
		right: false;
		bottom: false;
		z-index: 100;
		margin: 0;
		color: #000;
		height: 350px;
		width: 350px;
	  }
	  .logo .logo-text {
		display: false;
          position: absolute;
          margin: false;
          top: -7%;
          bottom: 0;
          cursor: pointer;
	  }
	  .imgCust{
		height: 300px;
		width:300px;
		border-radius: 50%;
	  }
	  .social {
		padding-left: 10px;
		margin-bottom: 0px;
		cursor: pointer;
	  }
	  
	  .side-header {
		font-family: 'Roboto Slab', serif;
		font-size: 18px;
		letter-spacing: 4px;
		font-weight: 600;
		line-height: 28px;
		margin: 60px auto 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #888;
	  }
	  .list-thing {
		padding-left: 20px;
		margin-bottom: 5px;
	  }
	  .content-container {
		margin-right: 0;
		width: calc(95% - 350px);
		padding: 25px 40px 50px;
	  }
	  .content-container > * {
		margin: 0 auto 25px;
	  }
	  .content-container > h3 {
		margin: 0 auto 5px;
	  }
	  .content-container > p.long-margin {
		margin: 0 auto 50px;
	  }
	  .title {
		width: 80%;
		text-align: center;
	  }
	  .separator {
		width: 300px;
		height: 2px;
		background-color: #999;
	  }
	  .greyed {
		background-color: #ddd;
		width: 100%;
		max-width: 580px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 6px;
		font-weight: 600;
		line-height: 28px;
	  }
	  @media screen and (max-width: 1150px) {
		.name {
		  color: #fff;
		  font-family: 'Roboto Slab';
		  font-size: 30px;
		  letter-spacing: 6px;
		  font-weight: 100;
		  line-height: 48px;
		}
	  }	  
	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <div class="rela-block page">
        <div class="rela-block top-bar">
			<div class="caps name"><div class="abs-center">${fullname} </div></div>
        </div>
        <div class="side-bar">
            <div class="mugshot">
                <div class="logo">
				<img src="https://avatars.githubusercontent.com/u/47500806?s=400&u=b1b7328fd58d385d641cd98b2b19d4916e737107&v=4" alt="" class="logo-text imgCust">
                </div>
			</div>
			<!--
            <p class="mb-1">Address Line 1</p>
            <p class="mb-1">Address Line 2</p>
			<p class="mb-1">City, Country</p>
			-->
			<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-envelope"></i></span>${email}</p>
			<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-phone-square-alt"></i></span>${phone}</p>
			`;
  if (skills != "" && skills != null)
    htmlTemplate += `<p class="rela-block caps side-header">Skills</p>
				<p class="rela-block list-thing">${skills}</p>`;
  if (expertise != "" && expertise != null)
    htmlTemplate += `<p class="rela-block list-thing">${expertise}</p>`;
  if (skill3 != "" && skill3 != null)
    htmlTemplate += `<p class="rela-block list-thing">${skill3}</p>`;
  if (skill4 != "" && skill4 != null)
    htmlTemplate += `<p class="rela-block list-thing">${skill4}</p>`;
  if (skill5 != "" && skill5 != null)
    htmlTemplate += `<p class="rela-block list-thing">${skill5}</p>`;
  if (skill6 != "" && skill6 != null)
    htmlTemplate += `<p class="rela-block list-thing">${skill6}</p>`;

  if (language != "" && language != null)
    htmlTemplate += `<p class="rela-block caps side-header">Language</p>
				<p class="rela-block list-thing">${language}</p>`;
  if (interest2 != "" && interest2 != null)
    htmlTemplate += `<p class="rela-block list-thing">${interest2}</p>`;
  if (interest3 != "" && interest3 != null)
    htmlTemplate += `<p class="rela-block list-thing">${interest3}</p>`;
  if (interest4 != "" && interest4 != null)
    htmlTemplate += `<p class="rela-block list-thing">${interest4}</p>`;
  if (interest6 != "" && interest6 != null)
    htmlTemplate += `<p class="rela-block list-thing">${interest5}</p>`;
  if (interest6 != "" && interest6 != null)
    htmlTemplate += `<p class="rela-block list-thing">${interest6}</p>`;

  htmlTemplate += `
  			</div>
			<div class="rela-block content-container">			
			<div class="rela-block caps greyed">Profile</div>`;
  if (portfolioLink != "" && portfolioLink != null)
    htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fas fa-globe"></i></span>${portfolioLink}</p>`;
  if (github != "" && github != null)
    htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-github"></i></span>${github}</p>`;
  if (facebook != "" && facebook != null)
    htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-facebook"></i></span>${facebook}</p>`;
  if (twitter != "" && twitter != null)
    htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-twitter-square"></i></span>${twitter}</p>`;
  if (instagram != "" && github != instagram)
    htmlTemplate += `<p class="rela-block social mb-0"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-instagram"></i></span>${instagram}</p>`;
  if (linkedin != "" && linkedin != null)
    htmlTemplate += `<p class="rela-block social mb-4"><span style="padding-right: 15px; font-size="20px;"><i class="fab fa-linkedin"></i></span>${linkedin}</p>`;

  htmlTemplate += `<div class="rela-block caps greyed">Education</div>`;
  if (institute != "" && institute != null)
    htmlTemplate += `<h3 class="mb-0">${institute}</h3>
		</br>
		</br>`;

  htmlTemplate += `<div class="rela-block caps greyed">Experience</div>`;

  if (experience != "" && experience != null)
    htmlTemplate += `<h3>${experience}</h3>
            <p class="text-muted light mt-1 mb-2" style="font-size:17px;">${designation}</p>
			</br>
			</br>`;

  htmlTemplate += `<div class="rela-block caps greyed">Certification</div>`;

  if (certification != "" && certification != null)
    htmlTemplate += `
			<h3>${certification}</h3>
			</br>
		</br>`;

  `</div>
    </div>
    </body>
    </html>
  `;
  return htmlTemplate;
};
