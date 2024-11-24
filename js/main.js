$(document).ready(function() {
    // Khi hover vào menu "ABOUT US" hoặc dropdown menu
    $('#aboutDropdown, .dropdown-menu').hover(
        function() {
            // Hiển thị dropdown menu
            $('#aboutDropdown').next('.dropdown-menu').stop(true, true).slideDown(200);
        },
        function() {
            // Ẩn dropdown menu
            $('#aboutDropdown').next('.dropdown-menu').stop(true, true).slideUp(200);
        }
    );
});
