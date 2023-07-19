import { useContext, useState } from "react";

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
    "men's clothing",
    "women's clothing",
    "accesories",
    "watches",
];

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElShop, setAnchorElShop] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenShopMenu = (event) => {
        setAnchorElShop(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setExpanded(false);
    };
    const handleCloseShopMenu = () => {
        setAnchorElShop(null);
    };

    const {totalQty} = useContext(CartContext);
    

    return (
        <AppBar position="static" id="NavBar">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Link to="/">ClothingCo</Link>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <Link to="/">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Home
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Accordion
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                                className="panel1"
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Shop</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {categories.map((category) => (
                                        <Link
                                            to={`/category/${category}`}
                                            key={category}
                                        >
                                            <MenuItem
                                                onClick={handleCloseNavMenu}
                                            >
                                                <Typography textAlign="center">
                                                    {category}
                                                </Typography>
                                            </MenuItem>
                                        </Link>
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                            <Link to="/about">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        About
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to="/contact">
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Contact
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Link to="/">ClothingCo</Link>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Link to="/">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                Home
                            </Button>
                        </Link>

                        <Box>
                            <Tooltip>
                                <Button
                                    onClick={handleOpenShopMenu}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    Shop
                                </Button>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-shop"
                                anchorEl={anchorElShop}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElShop)}
                                onClose={handleCloseShopMenu}
                            >
                                {categories.map((category) => (
                                    <Link
                                        to={`/category/${category}`}
                                        key={category}
                                    >
                                        <MenuItem onClick={handleCloseShopMenu}>
                                            <Typography textAlign="center">
                                                {category}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        <Link to="/About">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                About
                            </Button>
                        </Link>
                        <Link to="/Contact">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                Contact
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Link to="/cart">
                            <IconButton title="View Cart" sx={{ p: 0, color: "white" }}>
                                <CartWidget />
                                {totalQty>0 ? totalQty : null}
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
