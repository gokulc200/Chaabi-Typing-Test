export const quotesArray = [
	{
		quote:
			"aaa aas aad aaf aaj aak aal aa; asa ass asd asf asj ask asl as; ada ads add adf adj adk adl ad; afa afs afd aff afj afk afl af; aja ajs ajd ajf ajj ajk ajl aj; aka aks akd akf akj akk akl ak; ala als ald alf alj alk all al; a;a a;s a;d a;f a;j a;k a;l a;;",
		letter: '"a" letter combination with (asdfjkl;)'
	},
	{
		quote:
			"saa sas sad saf saj sak sal sa; ssa sss ssd ssf ssj ssk ssl ss; sda sds sdd sdf sdj sdk sdl sd; sfa sfs sfd sff sfj sfk sfl sf; sja sjs sjd sjf sjj sjk sjl sj; ska sks skd skf skj skk skl sk; sla sls sld slf slj slk sll sl; s;a s;s s;d s;f s;j s;k s;l s;;",
		letter: '"s" letter combination with (asdfjkl;)'
	},
	{
		quote:
			"daa das dad daf daj dak dal da; dsa dss dsd dsf dsj dsk dsl ds; dda dds ddd ddf ddj ddk ddl dd; dfa dfs dfd dff dfj dfk dfl df; dja djs djd djf djj djk djl dj; dka dks dkd dkf dkj dkk dkl dk; dla dls dld dlf dlj dlk dll dl; d;a d;s d;d d;f d;j d;k d;l d;;",
		letter: '"d" letter combination with (asdfjkl;)'
	},
	{
		quote:
			'faa fas fad faf faj fak fal fa; fsa fss fsd fsf fsj fsk fsl fs; fda fds fdd fdf fdj fdk fdl fd; ffa ffs ffd fff ffj ffk ffl ff; fja fjs fjd fjf fjj fjk fjl fj; fka fks fkd fkf fkj fkk fkl fk; fla fls fld flf flj flk fll fl; f;a f;s f;d f;f f;j f;k f;l f;;',
		letter: '"f" letter combination with (asdfjkl;)'
	},
	{
		quote:
			'jaa jas jad jaf jaj jak jal ja; jsa jss jsd jsf jsj jsk jsl js; jda jds jdd jdf jdj jdk jdl jd; jfa jfs jfd jff jfj jfk jfl jf; jja jjs jjd jjf jjj jjk jjl jj; jka jks jkd jkf jkj jkk jkl jk; jla jls jld jlf jlj jlk jll jl; j;a j;s j;d j;f j;j j;k j;l j;;',
		letter: '"j" letter combination with (asdfjkl;)'
	},
	{
		quote:
		"kaa kas kad kaf kaj kak kal ka; ksa kss ksd ksf ksj ksk ksl ks; kda kds kdd kdf kdj kdk kdl kd; kfa kfs kfd kff kfj kfk kfl kf; kja kjs kjd kjf kjj kjk kjl kj; kka kks kkd kkf kkj kkk kkl kk; kla kls kld klf klj klk kll kl; k;a k;s k;d k;f k;j k;k k;l k;;",
		letter: '"k" letter combination with (asdfjkl;)'
	},
	{
		quote:
		"laa las lad laf laj lak lal la; lsa lss lsd lsf lsj lsk lsl ls; lda lds ldd ldf ldj ldk ldl ld; lfa lfs lfd lff lfj lfk lfl lf; lja ljs ljd ljf ljj ljk ljl lj; lka lks lkd lkf lkj lkk lkl lk; lla lls lld llf llj llk lll ll; l;a l;s l;d l;f l;j l;k l;l l;;",
		letter: '"l" letter combination with (asdfjkl;)'
	},
	{
		quote:
		';aa ;as ;ad ;af ;aj ;ak ;al ;a; ;sa ;ss ;sd ;sf ;sj ;sk ;sl ;s; ;da ;ds ;dd ;df ;dj ;dk ;dl ;d; ;fa ;fs ;fd ;ff ;fj ;fk ;fl ;f; ;ja ;js ;jd ;jf ;jj ;jk ;jl ;j; ;ka ;ks ;kd ;kf ;kj ;kk ;kl ;k; ;la ;ls ;ld ;lf ;lj ;lk ;ll ;l; ;;a ;;s ;;d ;;f ;;j ;;k ;;l ;;;',
		letter: '";" letter combination with (asdfjkl;)'
	}
]

export const random = array => array[Math.floor(Math.random() * array.length)]
export const allowedKeys = [
	'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
	'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
	';',
]