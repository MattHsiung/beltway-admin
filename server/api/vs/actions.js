const actions = {
	Address: {
		getCampaign: {
			name: 'Get Campaign',
			action: 'getCampaign',
			input: ['candidateId'],
			output: 'address'
		},

		getCampaignWebAddress: {
			name: 'Get Campaign by Web Address',
			action: 'getCampaignWebAddress',
			input: ['candidateId'],
			output: 'address'
		},

	 	getCampaignByElection: {
			name: 'Get Campaign By Election',
			action: 'getCampaignByElection',
			input: ['candidateId'],
			output: 'address'
		}
	},

	Measure: {
		getMeasuresByYearState: {
			name: 'Get Measures By Year State',
			action: 'getMeasuresByYearState',
			input: ['year', 'stateId'],
			output: 'measures'
		},
		getMeasure: {
			name: 'Get Measure',
			action: 'getMeasure',
			input: 'measureId',
			output: 'measure'
		}
	},

	Candidates: {
		getByOfficeState: {
			name: 'Get By Office State',
			action: 'getByOfficeState',
			input: ['officeId'],
			output: 'candidateList'
		}
	},

	CandidateBio: {
		getBio: {
			name: 'Get Bio',
			action: 'getBio',
			input: ['candidateId'],
			output: 'bio'
		},
		
		getDetailedBio: {
			name: 'Get Detailed Bio',
			action: 'getDetailedBio',
			input: ['candidateId'],
			output: 'bio'
		},

		getAddlBio: {
			name: 'Get Additional Bio',
			action: 'getAddlBio',
			input: ['candidateId'],
			output: 'addlBio'
		}
	},	

	District: {
		getByZip: {
			name: 'Get By Zip',
			action: 'getByZip',
			input: ['zip5'],
			output: 'districtList'
		}
	},

	Election: {
		
		getElection: {
			name: 'Get Election',
			action: 'getElection',
			input: ['electionId'],
			output: 'elections'
		},

 		getElectionByYearState: {
			name: 'Get Election By Year State',
			action: 'getElectionByYearState',
			input: ['year'],
			output: 'elections'
		}
 	},	

	Local: { 
		
		getCounties: {
			name: 'Get Counties',
			action: 'getCounties',
			input: ['stateId'],
			output: 'counties'
		},

		getCities: {
			name: 'Get Cities',
			action: 'getCities',
			input: ['stateId'],
			output: 'cities'
		},

		getOfficials: {
			name: 'Get Officials',
			action: 'getOfficials',
			input: ['localId'],
			output: 'candidatelist'
		}
	},

	Npat: {
		getNpat: {
			name: 'Get NPAT',
			action: 'getNpat',
			input: ['candidateId'],
			output: 'npat'
		}
	},

	Office: {
		getTypes: {
			name: 'Get by Type',
			action: 'getTypes',
			input: null,
			output: 'officeTypes'
		}
	},

	Rating: {

		getCategories: {
			name: 'Get Categories',
			action: 'getCategories',
			input: ['stateId'],
			output: 'categories'
		},

		getSigList: {
			name: 'Get SIG List',
			action: 'getSigList',
			input: ['categoryId'],
			output: 'sigs'
		},

		getSig: {
			name: 'Get SIG',
			action: 'getSig',
			input: ['sigId'],
			output: 'sig'
		},

		getSigRatings: {
			name: 'Get SIG Ratings',
			action: 'getSigRatings',
			input: ['sigId'],
			output: 'rating'
		},

		getCandidateRating: {
			name: 'Get Candidate Rating',
			action: 'getCandidateRating',
			input: ['candidateId'],
			output: 'candidateRating'
		},

		getRating: {
			name: 'Get Rating',
			action: 'getRating',
			input: ['ratingId'],
			output: 'candidateRating'
		}
	},

	Votes: {
		
		getCategories: {
			name: 'Get Categories',
			action: 'getCategories',
			input: ['year'],
			output: 'categories'
		},

		getBill: {
			name: 'Get Bill',
			action: 'getBill',
			input: ['billId'],
			output: 'bill'
		},

		getBillAction: {
			name: 'Get Bill Action',
			action: 'getBillAction',
			input: ['actionId'],
			output: 'action'
		},

		getBillActionVotes: {
			name: 'Get Bill Action Votes',
			action: 'getBillActionVotes',
			input: ['actionId'],
			output: 'votes'
		},

		getBillActionVoteByOfficial: {
			name: 'Get Bill Action Vote By Official',
			action: 'getBillActionVoteByOfficial',
			input: ['actionId', 'candidateId'],
			output: 'votes'
		},

		getByBillNumber: {
			name: 'Get By Bill Number',
			action: 'getByBillNumber',
			input: ['billNumber'],
			output: 'bills'
		},

		getBillsByCategoryYearState: {
			name: 'Get Bills By Category Year State',
			action: 'getBillsByCategoryYearState',
			input: ['year'],
			output: 'bills'
		},

		getBillsByYearState: {
			name: 'Get Bills By Year State',
			action: 'getBillsByYearState',
			input: ['year'],
			output: 'bills'
		},

		getBillsByOfficialYearOffice: {
			name: 'Get Bills By Official Year Office',
			action: 'getBillsByOfficialYearOffice',
			input: ['candidateId', 'year'],
			output: 'bills'
		},

		getBillsByOfficialCategoryOffice: {
			name: 'Get Bills By Official Category Office',
			action: 'getBillsByOfficialCategoryOffice',
			input: ['candidateId', 'categoryId'],
			output: 'bills'
		},

		getByOfficial: {
			name: 'Get By Official',
			action: 'getByOfficial',
			input: ['candidateId'],
			output: 'bills'
		},

		getBillsBySponsorYear: {
			name: 'Get Bills By Sponsor Year',
			action: 'getBillsBySponsorYear',
			input: ['candidateId', 'year'],
			output: 'bills'
		},

		getBillsBySponsorCategory: {
			name: 'Get Bills By Sponsor Category',
			action: 'getBillsBySponsorCategory',
			input: ['candidateId', 'categoryId'],
			output: 'bills'
		},
		
		getBillsByStateRecent: {
			name: 'Get Bills By State Most Recent',
			action: 'getBillsByStateRecent',
			input: ['state'],
			output: 'bills'
		},

		getVetoes: {
			name: 'Get Vetoes',
			action: 'getVetoes',
			input: ['candidateId'],
			output: 'bills'
		}
	}
};

export default actions;