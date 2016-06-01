var Projects=angular.module('Projects',[]);
Projects.controller("main",function main($scope,$http){
	$(document).scroll(function(){
		var bodyPadding,auxTop,auxBottom;
		if(document.body.offsetWidth<1008){
			bodyPadding=0;
			auxTop=97;
			auxBottom=72;
		}
		else{
			bodyPadding=parseFloat($("body").css("padding-top"));
			auxTop=192;
			auxBottom=157;
		}
		if(document.body.scrollTop<auxTop+bodyPadding){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
		}
		else{
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+auxBottom+bodyPadding){
				$("#TopicsLeft").addClass("TopicsLeftBottom");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			}
			else{
				$("#TopicsLeft").addClass("TopicsLeftMiddle");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftBottom");
			}
		}
		$scope.$apply();
	});
	$scope.closeAll=function(){
		$(".NavigationBlocker").css("display","");
		$(".NavigationCenter").removeClass("NavigationCenterSmall");
		$(".Subnavigation ul").removeClass("SubnaviationShowUl");
		$("#TopicsLeft").removeClass("TopicsLeftSmallVisible");
	};
	$scope.init=function(){
		var bodyPadding,auxTop,auxBottom;
		if(document.body.offsetWidth<1008){
			bodyPadding=0;
			auxTop=97;
			auxBottom=72;
		}
		else{
			bodyPadding=parseFloat($("body").css("padding-top"));
			auxTop=192;
			auxBottom=157;
		}
		if(document.body.scrollTop<auxTop+bodyPadding){
			$("#TopicsLeft").addClass("TopicsLeftTop");
			$("#TopicsLeft").removeClass("TopicsLeftBottom");
			$("#TopicsLeft").removeClass("TopicsLeftMiddle");
		}
		else{
			if(document.body.offsetHeight-document.body.scrollTop<$(window.top).height()+auxBottom+bodyPadding){
				$("#TopicsLeft").addClass("TopicsLeftBottom");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftMiddle");
			}
			else{
				$("#TopicsLeft").addClass("TopicsLeftMiddle");
				$("#TopicsLeft").removeClass("TopicsLeftTop");
				$("#TopicsLeft").removeClass("TopicsLeftBottom");
			}
		}
	};
	$scope.openOtherProjects=function(event){
		event.stopPropagation();
		if($(".TopicsLeftSmallVisible").length>0)
			$("#TopicsLeft").removeClass("TopicsLeftSmallVisible");
		else
			$("#TopicsLeft").addClass("TopicsLeftSmallVisible");
	};
	$scope.showSmallViews=function(event){
		event.stopPropagation();
		$(".NavigationCenter").addClass("NavigationCenterSmall");
		$(".NavigationBlocker").css("display","block");
	};
	/*
		██████╗ ██████╗  ██████╗ ██╗   ██╗███████╗ ██████╗████████╗ ██████╗ ███████╗
		██╔══██╗██╔══██╗██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔════╝
		██████╔╝██████╔╝██║   ██║ ╚████╔╝ █████╗  ██║        ██║   ██║   ██║███████╗
		██╔═══╝ ██╔══██╗██║   ██║  ╚██╔╝  ██╔══╝  ██║        ██║   ██║   ██║╚════██║
		██║     ██║  ██║╚██████╔╝   ██║   ███████╗╚██████╗   ██║   ╚██████╔╝███████║
		╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚══════╝
		Tienes que poner esto abajo en $scope.projects ordenado alfabeticamente por título,
		en title pones el título, en href lo que va 
		{
			title: "",
			href: "",
			description: ""
		},
	*/
	$scope.projects=[
		{
			title: "Azotea verde",
			href: "Azotea_verde",
			description: "La azotea verde en la ciudad de México"
		},
		{
			title: "Biblioteca Vasconcelos",
			href: "Biblioteca_Vasconcelos",
			description: "Una biblioteca pública y un espacio cultural"
		},
		{
			title: "Biodiesel",
			href: "Biodiesel",
			description: "Producción de biodiesel a partir de microalgas"
		},
		{
			title: "Cocina sustentable",
			href: "Cocina_sustentable",
			description: "El 50% de los alimentos producidos a nivel mundial son desperdiciados o desechados"
		},
		{
			title: "Container City",
			href: "Container_City",
			description: "Eco-diseño urbano"
		},
		{
			title: "Dame un aventón",
			href: "Dame",
			description: "Plataforma pública de Internet y móvil en la cual usuarios comparten su auto, dando “aventones”"
		},
		{
			title: "Dos Patios",
			href: "Dos_Patios",
			description: "Edificio Dos Patios, liderazgo en energía y diseño ambiental"
		},
		{
			title: "EcoCasa",
			href: "EcoCasa",
			description: "La Secretaria Hipotecaria Federal hace casas sustentables"
		},
		{
			title: "Espacios orgánicos",
			href: "Espacios",
			description: "Debido a la deforestacion del país empresas y productoras suman esfuerzos"
		},
		{
			title: "Estufa",
			href: "Estufa",
			description: "Estufa urbana de concentración solar"
		},
		{
			title: "Fotodegradación",
			href: "Foto",
			description: "Equipo para fotodegradación de contaminantes orgánicos"
		},
		{
			title: "Luxiuh",
			href: "Luxiuh",
			description: "Ecodiseño mexicano"
		},
		{
			title: "NAMA",
			href: "NAMA",
			description: "Viviendas sustentables para climas cálidos"
		},
		{
			title: "PlantaE",
			href: "PlantaE",
			description: "Construcción de un humedal piloto para tratamiento de aguas residuales mediante fitorremediación"
		},
		{
			title: "Proyecto Tierra",
			href: "Tierra",
			description: "Empresa mexicana tiene como propósito divulgar el conocimiento para el cuidado del medio ambiente"
		},
		{
			title: "Puente Bahía Acapulco",
			href: "Puente",
			description: "Puente con ecodiseño"
		},
		{
			title: "Reactores",
			href: "Reactores",
			description: "Reactores plasma para tratar los gases contaminantes"
		},
		{
			title: "Sanitario",
			href: "Sanitario",
			description: "Sanitario mecatrónico automatizado"
		},
		{
			title: "TuEnergía",
			href: "Tu",
			description: "Producción de energía por medio de un generador"
		},
		{
			title: "Torre GSI",
			href: "Torre_GSI",
			description: "Torre que autoregula su temperatura"
		},
		{
			title: "TuboHotel",
			href: "TuboHotel",
			description: "Reciclando la arquitectura"
		},
		{
			title: "Vehículo",
			href: "Vehicle",
			description: "Se presentó un modelo de vehículo eléctrico..."
		}
	];
});