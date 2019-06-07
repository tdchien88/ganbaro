var app = ons.bootstrap();
app.controller('PageCtrl', function ($scope) {

  $scope.openMenu = function () {
    var menu = document.getElementById('menu');
    menu.open();
  };

  $scope.loadPage = function (page) {
    var menu = document.getElementById('menu');

    menu.close();
    $scope.navi.resetToPage(page, { animation: 'fade' });
  };

  document.addEventListener('init', function (event) {
    if (event.target.id === 'pageNav1') {
      var title = event.target.data && event.target.data.title ? event.target.data.title : 'Custom Page';
      event.target.querySelector('ons-toolbar div.center').textContent = title;
    }
    if (event.target.id === 'pageNav2') {
      var cardTitle = event.target.data && event.target.data.cardTitle ? event.target.data.cardTitle : 'Custom Card';
      event.target.querySelector('ons-card div.title').textContent = cardTitle;
    }
  });

  $scope.customPush = function () {
    $scope.navi.pushPage('pageNav1.html', { data: { title: $scope.navi.topPage.querySelector('ons-input').value } })
  };

  $scope.customPush2 = function (event) {
    $scope.navi.pushPage('pageNav2.html', { data: { cardTitle: event.target.textContent } })
  };


});

app.controller('SettingCtrl', function ($scope) {

  $scope.data = {
    switch : false,
    range : 20,
    name : 'ChienTD',};

});

app.controller('PullToRefeshController', function($timeout) {
  this.items = [3, 2, 1];

  this.load = function($done) {
    $timeout(function() {
      this.items.unshift(this.items.length + 1);
      $done();
    }.bind(this), 1000);
  }.bind(this);
});

app.controller('DialogController', function($scope) {
  this.showDialog = function() {
    if (this.dialog) {
      this.dialog.show();
    } else {
      ons.createElement('dialog.html', { parentScope: $scope, append: true })
        .then(function(dialog) {
          this.dialog = dialog;
          dialog.show();
        }.bind(this));
    }
  }.bind(this);
});

app.controller('SegmentController', function ($scope) {
    $scope.changeTab = function () {
      document.getElementById('tabbar').setActiveTab(1);
    };
    $scope.changeButton = function () {
      document.getElementById('segment').setActiveButton(1);
    };
    $scope.logIndexes = function () {
      console.log('active button index', document.getElementById('segment').getActiveButtonIndex());
      console.log('active tab index', document.getElementById('tabbar').getActiveTabIndex());
    };
  });

app.controller('SegmentController', function ($scope) {
    $scope.changeTab = function () {
      document.getElementById('tabbar').setActiveTab(1);
    };
    $scope.changeButton = function () {
      document.getElementById('segment').setActiveButton(1);
    };
    $scope.logIndexes = function () {
      console.log('active button index', document.getElementById('segment').getActiveButtonIndex());
      console.log('active tab index', document.getElementById('tabbar').getActiveTabIndex());
    };
  });


ons.createElement('popover.html', { append: true })
ons.createElement('dialog-alert.html', { append: true })
ons.createElement('dialog.html', { append: true })
ons.createElement('dialog-3.html', { append: true })
ons.createElement('dialog-toast.html', { append: true })
ons.createElement('model.html', { append: true })

document.addEventListener('init', function (event) {
  if (event.target.id === 'pageNav1') {
    var title = event.target.data && event.target.data.title ? event.target.data.title : 'Custom Page';
    event.target.querySelector('ons-toolbar div.center').textContent = title;
  }
  if (event.target.id === 'pageNav2') {
    var cardTitle = event.target.data && event.target.data.cardTitle ? event.target.data.cardTitle : 'Custom Card';
    event.target.querySelector('ons-card div.title').textContent = cardTitle;
  }
});

var customPush = function () {
  navi.pushPage('pageNav1.html', { data: { title: navi.topPage.querySelector('ons-input').value } })
};

var customPush2 = function (event) {
  navi.pushPage('pageNav2.html', { data: { cardTitle: event.target.textContent } })
};
document.addEventListener('postchange', function (event) {
  console.log('postchange event', event);
});