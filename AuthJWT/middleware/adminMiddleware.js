const isAdminUser = (req, res, next) => {
    if (!req.userInfo || req.userInfo.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: "Admin privilege required"
        });
    }
    next();
};

module.exports = isAdminUser;
