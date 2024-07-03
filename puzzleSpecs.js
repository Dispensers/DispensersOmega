let puzzleSpecs = [
/*	
	{
		number: "D1",
		publishedOn: "dd Mmm 24",
		dispenserSpec: [undefined, "p", "pt", "qpqrs", "p"],
		ringSpec: [-3, 7, -2, 6, -1, 5, 9, -4, 8],
		colourSpec: ["blue", "orange", "green", "black", "pink"],
		hintSpec: ["orange", 5],
		solutionDispenseSequence: [3, 3, 3, 2, 3, 2, 1, 4, 3],
		solutionColourSequence: ["orange", "blue", "green", "blue", "black", "blue", "orange", "pink", "blue"]
	},
	
	{
		number: "B1",
		publishedOn: "dd Mmm 24",
		dispenserSpec: [undefined, "ppqrq", "rpqr"],
		ringSpec: [-1, -4, 7, -2, 5, 8, -3, 6, 9],
		colourSpec: ["blue", "green", "orange"],
		hintSpec: ["black", 8],
		solutionDispenseSequence: [1, 1, 1, 2, 2, 1, 1, 2, 2],
		solutionColourSequence: ["green", "orange", "blue", "orange", "green", "blue", "green", "blue", "orange"]
	},

	{
		number: "E2",
		publishedOn: "dd Mmm 24",
		dispenserSpec: [undefined, "q", "rprpq", "rpqpq"],
		ringSpec: [-1, -2, 7, -3, -4, 8, 5, 6, 9],
		colourSpec: ["black", "orange", "green"],
		hintSpec: ["orange", 5],
		solutionDispenseSequence: [2, 2, 2, 3, 1, 3, 3, 2, 2],
		solutionColourSequence: ["orange", "black", "orange", "green", "orange", "black", "orange", "black", "green"]
	},
*/	
	{
		number: "A3",
		publishedOn: "3 Jul 24",
		dispenserSpec: [undefined, "prtr", "ppqqs"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["black", "blue", "orange", "green", "pink"],
		hintSpec: ["blue", 4],
		solutionDispenseSequence: [2, 2, 1, 2, 2, 1, 2, 1, 1],
		solutionColourSequence: ["green", "blue", "orange", "blue", "black", "pink", "black", "orange", "black"]
	},	
	{
		number: "F4",
		publishedOn: "26 Jun 24",
		dispenserSpec: [undefined, "rpprq", "pqpqs"],
		ringSpec: [8, 6, -4, -2, 9, -1, -3, 5, 7],
		colourSpec: ["green", "black", "orange", "blue"],
		hintSpec: ["green", 2],
		solutionDispenseSequence: [1, 1, 1, 2, 2, 1, 2, 2, 2],
		solutionColourSequence: ["black", "green", "blue", "orange", "green", "black", "green", "black", "green"]
	},	
	{
		number: "A5",
		publishedOn: "19 Jun 24",
		dispenserSpec: [undefined, "pqqpp", "rqp", "r"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["orange", "blue", "green"],
		hintSpec: ["blue", 6],
		solutionDispenseSequence: [1, 3, 1, 1, 2, 1, 1, 2, 2],
		solutionColourSequence: ["orange", "green", "orange", "blue", "orange", "blue", "orange", "blue", "green"]
	},		
	{
		number: "G1",
		publishedOn: "12 Jun 24",
		dispenserSpec: [undefined, "psq", "psprqr"],
		ringSpec: [9, 7, 5, -3, -1, 8, 6, -4, -2],
		colourSpec: ["black", "orange", "green", "blue"],
		hintSpec: ["black", 3],
		solutionDispenseSequence: [2, 2, 1, 2, 2, 2, 1, 2, 1],
		solutionColourSequence: ["black", "blue", "black", "orange", "green", "black", "blue", "green", "orange"]
	},		
	{
		number: "B5",
		publishedOn: "5 Jun 24",
		dispenserSpec: [undefined, "pq", "qr", "qrpppp"],
		ringSpec: [-1, -4, 7, -2, 5, 8, -3, 6, 9],
		colourSpec: ["blue", "green", "orange"],
		hintSpec: ["blue", 8],
		solutionDispenseSequence: [3, 2, 1, 2, 3, 3, 3, 3, 3],
		solutionColourSequence: ["blue", "green", "blue", "orange", "blue", "orange", "green", "blue", "green"]
	},

//--------------------------------------------------------------------------------------------------------------------

	{
		number: "E1",
		publishedOn: "21 Mar 24",
		dispenserSpec: [undefined, "rpqr", "ppqqr"],
		ringSpec: [-1, -2, 7, -3, -4, 8, 5, 6, 9],
		colourSpec: ["blue", "orange", "green"],
		hintSpec: ["orange", 5],
		solutionDispenseSequence: [2, 2, 1, 2, 2, 1, 1, 1, 2],
		solutionColourSequence: ["green", "orange", "blue", "green", "orange", "green", "blue", "orange", "blue"]
	},
	{
		number: "A6",
		publishedOn: "14 Mar 24",
		dispenserSpec: [undefined, "p", "rq", "rppqqss"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["black", "blue", "green", "orange"],
		hintSpec: ["black", 7],
		solutionDispenseSequence: [3, 2, 3, 3, 1, 3, 3, 2, 3],
		solutionColourSequence: ["orange", "blue", "orange", "blue", "black", "blue", "black", "green", "black"]
	},
	{
		number: "F2",
		publishedOn: "7 Mar 24",
		dispenserSpec: [undefined, "pqpq", "r", "pqqp"],
		ringSpec: [8, 6, -4, -2, 9, -1, -3, 5, 7],
		colourSpec: ["blue", "green", "orange"],
		hintSpec: ["blue", 2],
		solutionDispenseSequence: [1, 2, 3, 3, 3, 1, 3, 1, 1],
		solutionColourSequence: ["green", "blue", "green", "orange", "blue", "green", "blue", "green", "blue"]
	},
	{
		number: "B4",
		publishedOn: "29 Feb 24",
		dispenserSpec: [undefined, "qt", "rppqqps"],
		ringSpec: [-1, -4, 7, -2, 5, 8, -3, 6, 9],
		colourSpec: ["black", "green", "orange", "blue", "pink"],
		hintSpec: ["black", 8],
		solutionDispenseSequence: [2, 2, 2, 1, 2, 2, 1, 2, 2],
		solutionColourSequence: ["blue", "pink", "green", "black", "green", "black", "green", "black", "orange"]
	},
	{
		number: "A4",
		publishedOn: "22 Feb 24",
		dispenserSpec: [undefined, "ppqrr", "p", "pqq"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["blue", "black", "green"],
		hintSpec: ["black", 4],
		solutionDispenseSequence: [1, 2, 1, 1, 1, 3, 1, 3, 3],
		solutionColourSequence: ["green", "blue", "green", "black", "blue", "black", "blue", "black", "blue"]
	},
	{
		number: "F1",
		publishedOn: "15 Feb 24",
		dispenserSpec: [undefined, "pqrsr", "srrqp"],
		ringSpec: [8, 6, -4, -2, 9, -1, -3, 5, 7],
		colourSpec: ["blue", "orange", "black", "green"],
		hintSpec: ["green", 2],
		solutionDispenseSequence: [1, 2, 2, 2, 2, 1, 2, 1, 1],
		solutionColourSequence: ["black", "green", "black", "blue", "orange", "black", "orange", "black", "green"]
	},
	{
		number: "A2",
		publishedOn: "8 Feb 24",
		dispenserSpec: [undefined, "pqppqq", "rpq", "r"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["orange", "black", "blue"],
		hintSpec: ["orange", 8],
		solutionDispenseSequence: [1, 3, 1, 1, 2, 1, 1, 2, 2],
		solutionColourSequence: ["black", "blue", "black", "orange", "black", "orange", "black", "orange", "blue"]
	},
	{
		number: "B2",
		publishedOn: "1 Feb 24",
		dispenserSpec: [undefined, "pq", "rq", "ppprqq"],
		ringSpec: [-1, -4, 7, -2, 5, 8, -3, 6, 9],
		colourSpec: ["blue", "green", "black"],
		hintSpec: ["blue", 5],
		solutionDispenseSequence: [3, 3, 3, 3, 3, 2, 2, 1, 3],
		solutionColourSequence: ["green", "blue", "black", "green", "blue", "green", "black", "green", "blue"]
	},
	{
		number: "A1",
		publishedOn: "16 May 23",
		dispenserSpec: [undefined, "pq", "p", "qppqsrr"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["green", "blue", "black", "orange"],
		hintSpec: ["black", 1],
		solutionDispenseSequence: [3, 2, 3, 3, 3, 3, 1, 3, 3, 1],
		solutionColourSequence: ["black", "green", "black", "orange", "blue", "green", "blue", "green", "blue"]
	},
	{
		number: "A0",
		publishedOn: "16 May 23",
		dispenserSpec: [undefined, "pqqrrr", "qssp"],
		ringSpec: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		colourSpec: ["orange", "black", "blue", "green"],
		hintSpec: ["blue", 5],
		solutionDispenseSequence: [1, 2, 1, 2, 1, 1, 2, 1, 1],
		solutionColourSequence: ["blue", "orange", "blue", "green", "blue", "black", "green", "black", "orange"]
	}
];

