let array = [
    {
        mainCheckbox: document.getElementById("Companies-Data"),
        OptionsCheckbox: document.getElementById("Companies-DataOptions")
    },
    {
        mainCheckbox: document.getElementById("Contracts"),
        OptionsCheckbox: document.getElementById("ContractsOptions")
    },
   
    {
        mainCheckbox: document.getElementById("Dues-Payment"),
        OptionsCheckbox: document.getElementById("Dues-PaymentOptions")
    },
    {
        mainCheckbox: document.getElementById("Supporting-companies"),
        OptionsCheckbox: document.getElementById("Supporting-companiesOptions")
    },
    {
        mainCheckbox: document.getElementById("Marketing-companies"),
        OptionsCheckbox: document.getElementById("Marketing-companiesOptions")
    },
    {
        mainCheckbox: document.getElementById("Employee-data"),
        OptionsCheckbox: document.getElementById('Employee-dataOptions')
    },
    {
        mainCheckbox: document.getElementById("Corporate-employees"),
        OptionsCheckbox: document.getElementById('Corporate-employees-Options')
    },
    {
        mainCheckbox: document.getElementById("identity"),
        OptionsCheckbox: document.getElementById('identityOptions')
    }
    ,
    {
        mainCheckbox: document.getElementById("Driving-licence"),
        OptionsCheckbox: document.getElementById('Driving-licence-Options')
    },
    {
        mainCheckbox: document.getElementById("Nationalities"),
        OptionsCheckbox: document.getElementById('Nationalities-Options')
    },
    {
        mainCheckbox: document.getElementById("Gender"),
        OptionsCheckbox: document.getElementById('Gender-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Professions"),
        OptionsCheckbox: document.getElementById('Professions-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("WorkPlace"),
        OptionsCheckbox: document.getElementById('WorkPlace-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("MemberShip"),
        OptionsCheckbox: document.getElementById('MemberShip-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Sectors"),
        OptionsCheckbox: document.getElementById('Sectors-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Registration"),
        OptionsCheckbox: document.getElementById('Registration-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Fuel"),
        OptionsCheckbox: document.getElementById('Fuel-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Oil"),
        OptionsCheckbox: document.getElementById('Oil-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Transportr"),
        OptionsCheckbox: document.getElementById('Transportr-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Brands"),
        OptionsCheckbox: document.getElementById('Brands-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("model"),
        OptionsCheckbox: document.getElementById('model-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Categories"),
        OptionsCheckbox: document.getElementById('Categories-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Categories-Distribution"),
        OptionsCheckbox: document.getElementById('Categories-Distribution-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Features"),
        OptionsCheckbox: document.getElementById('Features-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Colors"),
        OptionsCheckbox: document.getElementById('Colors-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Countries"),
        OptionsCheckbox: document.getElementById('Countries-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Areas"),
        OptionsCheckbox: document.getElementById('Areas-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Cities"),
        OptionsCheckbox: document.getElementById('Cities-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Banks"),
        OptionsCheckbox: document.getElementById('Banks-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Payment-Method"),
        OptionsCheckbox: document.getElementById('Payment-Method-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Ref"),
        OptionsCheckbox: document.getElementById('Ref-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Extras"),
        OptionsCheckbox: document.getElementById('Extras-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Options"),
        OptionsCheckbox: document.getElementById('Options-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Virtual-examination"),
        OptionsCheckbox: document.getElementById('Virtual-examination-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Virtual-examination-details"),
        OptionsCheckbox: document.getElementById('Virtual-examination-details-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("countries-Classification"),
        OptionsCheckbox: document.getElementById('countries-Classification-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Companies-Classification"),
        OptionsCheckbox: document.getElementById('Companies-Classification-Options')
    }
    ,
    {
        mainCheckbox: document.getElementById("Faq"),
        OptionsCheckbox: document.getElementById('Faq-Options')
    }


]
function initializeCheckboxVisibility(array) {
    array.forEach(index => {
        const isChecked = index.mainCheckbox.checked;

        index.OptionsCheckbox.style.display = isChecked ? 'block' : 'none';

        if (!isChecked) {
            const checkboxes = index.OptionsCheckbox.querySelectorAll('.checkbox');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        }

        index.mainCheckbox.addEventListener('change', function () {
            const isChecked = this.checked;
            index.OptionsCheckbox.style.display = isChecked ? 'block' : 'none';

            if (!isChecked) {
                const checkboxes = index.OptionsCheckbox.querySelectorAll('.checkbox');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeCheckboxVisibility(array);
})
function listChecked(icon){
    const mainCheckbox = icon.nextElementSibling;
    mainCheckbox.checked = !mainCheckbox.checked;

    icon.style.color = mainCheckbox.checked ? 'green' : '';

    if (!mainCheckbox.checked) {
        const container = icon.closest('.inputs-accordion-item');
        const allCheckboxes = container.querySelectorAll('.accordion-item-description .checkbox');
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
            initializeCheckboxVisibility(array)
        });
    }
 }
 document.addEventListener("DOMContentLoaded", function () {
    const inputsAccordion = document.querySelectorAll(".inputs-accordion-item");

    function ViewAleadyChecked(){
        listsIcons = document.querySelectorAll('.listCheck')
        console.log(listsIcons)
        listsIcons.forEach((icon)=>{
         if(icon.nextElementSibling.checked){
            icon.style.color = 'green';
         }else{
            icon.style.color = '';
         }
        })

    }
    ViewAleadyChecked()
 })
