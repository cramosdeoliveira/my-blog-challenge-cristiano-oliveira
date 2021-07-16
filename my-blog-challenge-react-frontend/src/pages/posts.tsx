import user2 from '../assets/img/user-2.png';
import user3 from '../assets/img/user-3.png';
import user4 from '../assets/img/user-4.png';
import post1 from '../assets/img/post-1.png';
import post2 from '../assets/img/post-2.png';
import post3 from '../assets/img/post-3.png';

function Posts() {

	// TODO: Posts dinâmicos vindos da api; modal de criação e edição de posts; funcionalidade de exclusão de posts do usuário.

	return (
		<section className="posts">
			<div className="container">
				<div className="background"></div>
				<div className="content">
					<ul className="posts-list">

						<li>
							<header>
								<div className="user">
									<figure className="user">
										<img src={user2} alt="User-2" />
									</figure>
									<div className="content">
										<div className="name">Denis Olsen</div>
										<div className="data">2021.02.01 - 20:18</div>
									</div>
								</div>
								<div className="actions">
									<div className="icon type-1"></div>
									<div className="icon type-2"></div>
								</div>
							</header>
							<h1>Campbell sets record pace in second Kyalami test</h1>
							<div className="content">
								<figure className="user">
									<img src={post1} alt="post-1" />
								</figure>
								<p>
									Matt Campbell set not one but two unofficial GT3 lap records during Thursday’s second test session ahead of this weekend’s Kyalami 9 Hour.
									GPX Racing’s Porsche is one of nine cars to feature Drivers’ Championship contenders this weekend and signalled its intent by leading for much of the two-hour session.

									Only morning pace-setter Dylan Pereira (Team Perfect Circle) disrupted GPX’s dominance before Mathieu Jaminet lowered the benchmark three times.
									But even his best – which was still good enough for second – wasn’t safe from Campbell who promptly set the day’s first sub-1m43s lap before immediately following up with a 1m42.697s – two tenths under Nick Tandy’s official race lap record from last year.

									The scale of GPX’s pace was reflected across the rest of the top-nine, which was covered by the same margin as Campbell’s advantage over second place.
								</p>
							</div>
						</li>

						<li>
							<header>
								<div className="user">
									<figure className="user">
										<img src={user3} alt="User-3" />
									</figure>
									<div className="content">
										<div className="name">lynn hung</div>
										<div className="data">2021.02.02 - 13:46</div>
									</div>
								</div>
							</header>
							<h1>Total 24 Hours of Spa enters deciding phase</h1>
							<div className="content">
								<figure className="user">
									<img src={post2} alt="post-2" />
								</figure>
								<p>
									Audi Sport Team Sainteloc led the way at three-quarter distance with Christopher Haase at the wheel of its #25 machine, having recently made a stop under safety car conditions and leapfrogged the #66 Audi Sport Team Attempto car. James Calado ran third in the #51 AF Corse Ferrari, followed by the #12 GPX Racing Porsche and the #72 SMP Racing Ferrari.

									One of the major turning points of the race occurred with 16 hours and 40 minutes complete when the leading #63 Orange1 FFF Racing Lamborghini spun into the barriers at Raidillon. Dennis Lind was at the wheel and was able to get going again, but significant damage forced him to pull off for good at Bruxelles.
								</p>
							</div>
						</li>

						<li>
							<header>
								<div className="user">
									<figure className="user">
										<img src={user4} alt="User-4" />
									</figure>
									<div className="content">
										<div className="name">jimmi halvorsen</div>
										<div className="data">2021.02.03 - 09:10</div>
									</div>
								</div>
							</header>
							<h1>37 cars now confirmed for 2019’s Suzuka 10 Hours</h1>
							<div className="content">
								<figure className="user">
									<img src={post3} alt="post-3" />
								</figure>
								<p>
									Just one Mother Chassis entry is currently listed: the CarsTokaiDream28 Lotus Evora that also appeared at Suzuka last season. Only found in Japan, MC cars – which are based around a common set of key components such as a Dome-built carbon chassis and 4.5-litre V8 engine – compete alongside their GT3 counterparts in Super GT’s GT300 class thanks to SRO’s Balance of Performance data.

									Super Taikyu is also well represented courtesy of SATO-SS Sports (Mercedes-AMG), MP Racing (Nissan) and Tairoka Racing (TBA). All three have extensive knowledge of Pirelli’s DHD2 tyre, which must be used by all teams competing at Suzuka and in Super Taikyu.

									Two more Japanese entries appear on the provisional list, which is expected to expand further in due course: The Callaway Competition with BingoSports Corvette C7 GT3-R, which contested the same race last August, and an extra McLaren – albeit currently without a team – featuring two-time FIA Formula 1 World Champion Mika Hakkinen.
								</p>
							</div>
						</li>

					</ul>
				</div>
			</div>
			<div className="buttons">
				<div className="container">
					<button className="button type-1">
						<span>criar</span>
					</button>
					<button className="button type-1">
						<span>galeria</span>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Posts;
