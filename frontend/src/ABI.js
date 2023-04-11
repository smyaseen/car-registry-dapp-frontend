export default [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_number", type: "uint256" },
    ],
    name: "addCarByCarNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_number", type: "uint256" }],
    name: "getCarByCarNumber",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "uint256", name: "number", type: "uint256" },
          { internalType: "address", name: "owner", type: "address" },
        ],
        internalType: "struct CarRegistry.Car",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "transferTo", type: "address" },
      { internalType: "uint256", name: "_number", type: "uint256" },
    ],
    name: "transferOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
