const productos = [
    {
        nombreProducto: "7Up",
        imagen: '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',
        descripcion: "Refresco ...",
        precio: 350
    },
    {
        nombreProducto: "Coca Cola",
        imagen: 'UklGRjQDAABXRUJQVlA4WAoAAAAIAAAARQAARQAAVlA4IFQCAADQCwCdASpGAEYAPpFCnEolo6KhqPJJyLASCWMA0XPnlgY6UWAdLKjghwFIvZl+7pnAxoTfhf4v0Ri4+d+QXt/K58HyV1PUksgIDbjzgnGC3xlIDECQ7uWNp0OzrpejwLADZfeqH3wAAP77IebeaoDdjTus8tjG3ZyWXbX6e4TviV9VNmojjZZ59Zz7bbpzMX/YB/bbOMCJDpdFt27Pos+MOGtjW5osI93/CnRrafeMU4BT2bk+kRGMXEbCsp286Zobn/kicKCCfY62v0RpabtJVZkt+E6LG5b2gQMGayp1WfHVOy8VJCZxmlIuUR9xh4bIVrgMcX1bsL2FCDHBw91nnI4WH5SnXXkVjydixRl6MIzEfFbXCEdllBed1sOea01B9ri4eSS/ThYIkTovzgi/3j7LmczIPb5hRxVhdZwDx1/QCQmvTiO/wr3SsFBpyEM0Dme05QgB3yAAMLwPf+Ewj0FNyzGVXMUbM/qkjYdV6qjYa5Q63K1G2zG3lD/hIvPFnfkgG8sLS1DDt7vjVvnYCP9D3T5O/azhf5gA+bNfhes3LB9KAeYougvXkA6sg6g8IXIJL1pPKX7TwvAyq2RvFkGTwK3Ai8MMdShxsxMgKMtj49QWHo4xBt+blA+phEGE381XVRERxTCQBmtVs3zvT0h4Pi0eFwj8ZeClqlFqNyPPFF1SLI4S+3A/f76g21jDBZX2Pnsrn8SE1yLbVTAT07MZkqBgIWX/O0wwWoQPgXUH/XxWcf6pxGZqtzgzIEZau3ND4rDeMBsOPzQzyv16HAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAEYAAAADoAQAAQAAAEYAAAAAAAAA',
        descripcion: "Gaseosa ...",
        precio: 400
    }
]

export default productos