document.getElementById('manyana').addEventListener('change', function()
{
    document.getElementById('afternoon').hidden=true;
    document.getElementById('morning').hidden=false;
});
document.getElementById('tarde').addEventListener('change', function()
{
    document.getElementById('morning').hidden=true;
    document.getElementById('afternoon').hidden=false;

});
